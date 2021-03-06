# United Arab Emirates
## NSSAC COVID-19 Summary
## 02/29/2020



### Situation Report:
#### Fig 1:
![United Arab Emirates cases](../merged_histories/United_Arab_Emirates_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/United_Arab_Emirates_merged_daily.csv)

#### Table 1: Situation summary


|                           | BOP              | Tencent                       | JHU                         |
|---------------------------|------------------|-------------------------------|-----------------------------|
| First update logged       | 01/12/20         | 02/04/20                      | 01/22/20                    |
| Last update logged        | 02/29/20         | 02/29/20                      | 02/28/20                    |
| Method                    | Public line list | Daily cases in country scrape | Cases by day & country list |
| First known case          | 01/29/20         | 02/04/20                      | 01/22/20                    |
| Total confirmed cases     | 20               | 19                            | 19                          |
| New cases since yesterday |                  | 0                             |                             |
| Total suspected           |                  | 0                             |                             |
| Total hospitalized        | 4                |                               |                             |
| Total recovered           | 0                | 5                             | 5                           |
| Total deaths              | 0                | 0                             | 0                           |

Data sources: BOP, JHU, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/United_Arab_Emirates_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![United Arab Emirates mapped](../case_locs/United_Arab_Emirates_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                        |   confirmed |
|----------|---------------------------------|-------------|
| JHU      | United Arab Emirates            |          19 |
| BOP      | Abu Dhabi, United Arab Emirates |           1 |

Data sources: BOP, JHU, Natural Earth, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/United_Arab_Emirates_case_locs.geojson)

### Observed case clusters:
#### Fig 3:
![United Arab Emirates cases](../cluster_analysis/United_Arab_Emirates_imported_cases_BOP.png)



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