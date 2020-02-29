# San Marino
## NSSAC COVID-19 Summary
## 02/29/2020



### Situation Report:
#### Fig 1:
![San Marino cases](../merged_histories/San_Marino_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/San_Marino_merged_daily.csv)

#### Table 1: Situation summary


|                           | BOP              | JHU                         |
|---------------------------|------------------|-----------------------------|
| First update logged       | 01/12/20         | 01/22/20                    |
| Last update logged        | 02/29/20         | 02/28/20                    |
| Method                    | Public line list | Cases by day & country list |
| First known case          | 02/27/20         | 01/22/20                    |
| Total confirmed cases     | 1                | 1                           |
| New cases since yesterday |                  | 0                           |
| Total suspected           |                  |                             |
| Total hospitalized        | 0                |                             |
| Total recovered           | 0                | 0                           |
| Total deaths              | 0                | 0                           |

Data sources: BOP, JHU, 


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/San_Marino_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![San Marino mapped](../case_locs/San_Marino_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name   |   confirmed |
|----------|------------|-------------|
| JHU      | San Marino |           1 |
| BOP      | San Marino |           1 |

Data sources: BOP, JHU, Natural Earth, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/San_Marino_case_locs.geojson)

### Observed case clusters:
#### Fig 3:
![San Marino cases](../cluster_analysis/San_Marino_imported_cases_BOP.png)



Data source: BOP


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