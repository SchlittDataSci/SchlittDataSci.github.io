/*
 * starfield-layer.js — a MapLibre GL custom layer that draws a 3D star skybox
 * behind the globe. Point stars live on a unit sphere; each frame the vertex
 * matrix is rebuilt from MapLibre's MVP with translation stripped, so the stars
 * sit at infinity and rotate WITH the globe. Raw WebGL — no three.js.
 *
 * The camera-matrix technique is ported from @geoql/maplibre-gl-starfield:
 *
 *   MIT License — Copyright (c) 2025-current Vinayak Kulkarni
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *   THE SOFTWARE.
 */
(function () {
  // --- tiny column-major mat4 helpers (no dependency) ---------------------
  function mul(a, b) { // returns a * b
    var o = new Float32Array(16);
    for (var c = 0; c < 4; c++) for (var r = 0; r < 4; r++) {
      o[c*4+r] = a[r]*b[c*4] + a[4+r]*b[c*4+1] + a[8+r]*b[c*4+2] + a[12+r]*b[c*4+3];
    }
    return o;
  }
  function invert(m) { // general 4x4 inverse (gl-matrix), null if singular
    var a00=m[0],a01=m[1],a02=m[2],a03=m[3],a10=m[4],a11=m[5],a12=m[6],a13=m[7],
        a20=m[8],a21=m[9],a22=m[10],a23=m[11],a30=m[12],a31=m[13],a32=m[14],a33=m[15];
    var b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,
        b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,
        b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32;
    var det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;
    if (!det) return null; det = 1.0/det;
    var o = new Float32Array(16);
    o[0]=(a11*b11-a12*b10+a13*b09)*det; o[1]=(a02*b10-a01*b11-a03*b09)*det;
    o[2]=(a31*b05-a32*b04+a33*b03)*det; o[3]=(a22*b04-a21*b05-a23*b03)*det;
    o[4]=(a12*b08-a10*b11-a13*b07)*det; o[5]=(a00*b11-a02*b08+a03*b07)*det;
    o[6]=(a32*b02-a30*b05-a33*b01)*det; o[7]=(a20*b05-a22*b02+a23*b01)*det;
    o[8]=(a10*b10-a11*b08+a13*b06)*det; o[9]=(a01*b08-a00*b10-a03*b06)*det;
    o[10]=(a30*b04-a31*b02+a33*b00)*det; o[11]=(a21*b02-a20*b04-a23*b00)*det;
    o[12]=(a11*b07-a10*b09-a12*b06)*det; o[13]=(a00*b09-a01*b07+a02*b06)*det;
    o[14]=(a31*b01-a30*b03-a32*b00)*det; o[15]=(a20*b03-a21*b01+a22*b00)*det;
    return o;
  }

  var VERT = [
    'attribute vec3 a_pos;',
    'attribute float a_size;',
    'attribute float a_op;',
    'attribute vec3 a_col;',
    'uniform mat4 u_matrix;',
    'varying float v_op;',
    'varying vec3 v_col;',
    'void main(){',
    '  v_op = a_op; v_col = a_col;',
    '  gl_Position = u_matrix * vec4(a_pos, 1.0);',
    '  gl_PointSize = a_size;',
    '}'
  ].join('\n');

  var FRAG = [
    'precision mediump float;',
    'varying float v_op;',
    'varying vec3 v_col;',
    'void main(){',
    '  vec2 c = gl_PointCoord - vec2(0.5);',
    '  float d = length(c);',
    '  float core = smoothstep(0.5, 0.06, d);',
    '  float halo = smoothstep(0.5, 0.0, d) * 0.35;',
    '  float a = clamp(core + halo, 0.0, 1.0) * v_op;',
    '  gl_FragColor = vec4(v_col * a, a);',   // premultiplied alpha
    '}'
  ].join('\n');

  function compile(gl, type, src) {
    var sh = gl.createShader(type); gl.shaderSource(sh, src); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.warn('[starfield] shader:', gl.getShaderInfoLog(sh)); gl.deleteShader(sh); return null;
    }
    return sh;
  }

  function StarfieldLayer(opts) {
    opts = opts || {};
    this.id = opts.id || 'starfield';
    this.type = 'custom';
    this.renderingMode = '3d';
    this.starCount = opts.starCount || 4500;
    this.starSize = opts.starSize || 1.7;
    this._dpr = Math.min(window.devicePixelRatio || 1, 2);
  }

  StarfieldLayer.prototype.onAdd = function (map, gl) {
    this.map = map; this.gl = gl;
    var vs = compile(gl, gl.VERTEX_SHADER, VERT);
    var fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    var p = gl.createProgram(); gl.attachShader(p, vs); gl.attachShader(p, fs); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) { console.warn('[starfield] link:', gl.getProgramInfoLog(p)); return; }
    this.prog = p;
    this.uMatrix = gl.getUniformLocation(p, 'u_matrix');
    this.aPos = gl.getAttribLocation(p, 'a_pos');
    this.aSize = gl.getAttribLocation(p, 'a_size');
    this.aOp = gl.getAttribLocation(p, 'a_op');
    this.aCol = gl.getAttribLocation(p, 'a_col');

    var n = this.starCount, dpr = this._dpr, sz = this.starSize;
    var pos = new Float32Array(n*3), sizes = new Float32Array(n), ops = new Float32Array(n), cols = new Float32Array(n*3);
    // Mostly white, a minority warm/cool — subtle stellar colour spread.
    var tints = [[1,1,1],[1,1,1],[1,1,1],[1,1,1],[0.78,0.85,1.0],[1.0,0.91,0.80],[0.88,0.92,1.0],[1.0,0.86,0.72]];
    for (var i = 0; i < n; i++) {
      var th = Math.random()*Math.PI*2, ph = Math.acos(2*Math.random()-1), s = Math.sin(ph);
      pos[i*3]=s*Math.cos(th); pos[i*3+1]=s*Math.sin(th); pos[i*3+2]=Math.cos(ph);
      sizes[i]=sz*(0.35+Math.random()*1.5)*dpr;
      ops[i]=0.10+Math.pow(Math.random(),1.7)*0.90;
      var t=tints[(Math.random()*tints.length)|0];
      cols[i*3]=t[0]; cols[i*3+1]=t[1]; cols[i*3+2]=t[2];
    }
    var mk = function (data) { var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW); return b; };
    this.posBuf = mk(pos); this.sizeBuf = mk(sizes); this.opBuf = mk(ops); this.colBuf = mk(cols);
    this.count = n;
  };

  StarfieldLayer.prototype.render = function (gl, options) {
    if (!this.prog) return;
    var P = options.projectionMatrix, MVP = options.modelViewProjectionMatrix;
    if (!P || !MVP) return;
    var Pinv = invert(P); if (!Pinv) return;
    var MV = mul(Pinv, MVP);
    MV[12] = 0; MV[13] = 0; MV[14] = 0;         // strip translation → skybox at infinity
    var mat = mul(P, MV);

    gl.useProgram(this.prog);
    gl.uniformMatrix4fv(this.uMatrix, false, mat);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);   // premultiplied over
    gl.disable(gl.DEPTH_TEST);

    var bind = function (loc, buf, size) {
      if (loc < 0) return;
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
    };
    bind(this.aPos, this.posBuf, 3);
    bind(this.aSize, this.sizeBuf, 1);
    bind(this.aOp, this.opBuf, 1);
    bind(this.aCol, this.colBuf, 3);

    gl.drawArrays(gl.POINTS, 0, this.count);

    // leave the default vertex-attrib state clean for MapLibre's own draws
    if (this.aPos >= 0) gl.disableVertexAttribArray(this.aPos);
    if (this.aSize >= 0) gl.disableVertexAttribArray(this.aSize);
    if (this.aOp >= 0) gl.disableVertexAttribArray(this.aOp);
    if (this.aCol >= 0) gl.disableVertexAttribArray(this.aCol);
  };

  StarfieldLayer.prototype.onRemove = function () {
    var gl = this.gl; if (!gl) return;
    [this.posBuf, this.sizeBuf, this.opBuf, this.colBuf].forEach(function (b) { if (b) gl.deleteBuffer(b); });
    if (this.prog) gl.deleteProgram(this.prog);
    this.prog = this.gl = this.map = null;
  };

  window.StarfieldLayer = StarfieldLayer;
})();
