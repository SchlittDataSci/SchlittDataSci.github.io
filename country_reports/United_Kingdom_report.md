# United Kingdom
## NSSAC COVID-19 Summary
## 02/27/2020



### Situation Report:
#### Fig 1:
![United Kingdom cases](../merged_histories/United_Kingdom_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/United_Kingdom_merged_daily.csv)

#### Table 1: Situation summary


|                           | NIHFogarty       | JHU                         | Tencent                       | BOP              |
|---------------------------|------------------|-----------------------------|-------------------------------|------------------|
| First update logged       | 01/13/20         | 01/22/20                    | 02/07/20                      | 01/12/20         |
| Last update logged        | 02/27/20         | 02/26/20                    | 02/26/20                      | 02/26/20         |
| Method                    | Public line list | Cases by day & country list | Daily cases in country scrape | Public line list |
| First known case          | 01/31/20         | 01/22/20                    | 02/07/20                      | 01/31/20         |
| Total confirmed cases     | 13               | 13                          | 13                            | 9                |
| New cases since yesterday |                  | 0                           |                               |                  |
| Total suspected           |                  |                             | 0                             |                  |
| Total hospitalized        | 0                |                             |                               | 0                |
| Total recovered           |                  | 8                           | 8                             | 0                |
| Total deaths              | 0                | 0                           | 0                             | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/United_Kingdom_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![United Kingdom mapped](../case_locs/United_Kingdom_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                   |   confirmed |
|----------|----------------------------|-------------|
| NIH      | London, United Kingdom     |           7 |
| NIH      | UK, United Kingdom         |           4 |
| NIH      | York, United Kingdom       |           2 |
| JHU      | UK                         |          13 |
| BOP      | London, United Kingdom     |           5 |
| BOP      | North East, United Kingdom |           2 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/United_Kingdom_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/United_Kingdom_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![United Kingdom cases](../cluster_analysis/United_Kingdom_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![United Kingdom cases](../cluster_analysis/United_Kingdom_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![United Kingdom network](../autochthonous_networks/United_Kingdom_network.png)



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