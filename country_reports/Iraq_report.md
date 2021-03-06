# Iraq
## NSSAC COVID-19 Summary
## 03/21/2020



### Situation Report:
#### Fig 1:
![Iraq cases](../merged_histories/Iraq_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Iraq_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | BOP              | Tencent                       |
|---------------------------|-----------------------------|------------------|-------------------------------|
| First update logged       | 01/22/20                    | 01/06/20         | 02/29/20                      |
| Last update logged        | 03/20/20                    | 03/18/20         | 03/20/20                      |
| Method                    | Cases by day & country list | Public line list | Daily cases in country scrape |
| First known case          | 01/22/20                    | 02/02/20         | 02/29/20                      |
| Total confirmed cases     | 208                         | 18               | 6                             |
| New cases since yesterday | 16                          |                  |                               |
| Total suspected           |                             |                  | 0                             |
| Total hospitalized        |                             | 1                |                               |
| Total recovered           | 49                          | 0                | 0                             |
| Total deaths              | 17                          | 0                | 0                             |

Data sources: BOP, JHU, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Iraq_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Iraq mapped](../case_locs/Iraq_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name   |   confirmed |
|----------|------------|-------------|
| NIH      | Iraq       |           1 |
| JHU      | Iraq       |         208 |
| BOP      | Najaf      |           4 |
| BOP      | Kirkuk     |           4 |
| BOP      | Baghdad    |           3 |
| BOP      | Maysan     |           1 |
| BOP      | Karbala    |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Iraq_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Iraq_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Iraq cases](../cluster_analysis/Iraq_imported_cases_BOP.png)



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