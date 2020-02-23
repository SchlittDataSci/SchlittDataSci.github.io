# Egypt
## NSSAC COVID-19 Summary
## 02/23/2020



### Situation Report:
#### Fig 1:
![Egypt cases](../merged_histories/Egypt_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Egypt_merged_daily.csv)

#### Table 1: Situation summary


|                           | BOP              | JHU                         | NIHFogarty       |
|---------------------------|------------------|-----------------------------|------------------|
| First update logged       | 01/12/20         | 01/22/20                    | 01/13/20         |
| Last update logged        | 02/22/20         | 02/22/20                    | 02/21/20         |
| Method                    | Public line list | Cases by day & country list | Public line list |
| First known case          | 02/14/20         | 01/22/20                    | 02/14/20         |
| Total confirmed cases     | 1                | 1                           | 1                |
| New cases since yesterday |                  | 0                           |                  |
| Total suspected           |                  |                             |                  |
| Total hospitalized        | 0                |                             | 0                |
| Total recovered           | 0                | 0                           |                  |
| Total deaths              | 0                | 0                           | 0                |

Data sources: BOP, JHU, NIH-Fogarty, 


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Egypt_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Egypt mapped](../case_locs/Egypt_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name   |   confirmed |
|----------|------------|-------------|
| NIH      | Egypt      |           1 |
| JHU      | Egypt      |           1 |
| BOP      | Egypt      |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Egypt_case_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Egypt cases](../cluster_analysis/Egypt_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Egypt cases](../cluster_analysis/Egypt_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Egypt network](../autochthonous_networks/Egypt_network.png)



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