# UAE
## NSSAC COVID-19 Summary
## 02/22/2020



### Situation Report:
#### Fig 1:
![UAE cases](../merged_histories/UAE_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/UAE_merged_daily.csv)

#### Table 1: Situation summary


|                           | Tencent                       | BOP              | JHU                         | NIHFogarty       |
|---------------------------|-------------------------------|------------------|-----------------------------|------------------|
| First update logged       | 02/04/20                      | 01/12/20         | 01/22/20                    | 01/13/20         |
| Last update logged        | 02/22/20                      | 02/21/20         | 02/21/20                    | 02/21/20         |
| Method                    | Daily cases in country scrape | Public line list | Cases by day & country list | Public line list |
| First known case          | 02/04/20                      | 01/29/20         | 01/22/20                    | 01/29/20         |
| Total confirmed cases     | 13                            | 12               | 9                           | 9                |
| New cases since yesterday |                               |                  |                             |                  |
| Total suspected           | 0                             |                  |                             |                  |
| Total hospitalized        |                               | 4                |                             | 0                |
| Total recovered           | 4                             | 0                | 4                           |                  |
| Total deaths              | 0                             | 0                | 0                           | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/UAE_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![UAE mapped](../case_locs/UAE_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name             |   confirmed |
|----------|----------------------|-------------|
| Tencent  | United Arab Emirates |          13 |
| NIH      | UAE                  |           9 |
| JHU      | United Arab Emirates |           9 |
| BOP      | UAE                  |          12 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/UAE_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/UAE_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![UAE cases](../cluster_analysis/UAE_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![UAE cases](../cluster_analysis/UAE_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![UAE network](../autochthonous_networks/UAE_network.png)



Data source: NIH-Fogarty


### Data sources:
* **[BOP](https://github.com/beoutbreakprepared/nCoV2019)**
* **[JHU](https://github.com/CSSEGISandData/COVID-19)** 
* **[NIH-Fogarty](https://docs.google.com/spreadsheets/d/1jS24DjSPVWa4iuxuD4OAXrE3QeI8c9BC1hSlqr-NMiU/edit#gid=1187587451)** 
* **[Tencent](https://news.qq.com/zt2020/page/feiyan.htm)**
* **[Natural Earth](https://www.naturalearthdata.com/forums/forum/natural-earth-map-data/cultural-vectors/admin-1-states-provinces-and-their-boundaries/)**

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-158816269-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-158816269-1');
</script>