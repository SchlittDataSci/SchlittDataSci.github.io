# Brazil
## NSSAC COVID-19 Summary
## 03/15/2020



### Situation Report:
#### Fig 1:
![Brazil cases](../merged_histories/Brazil_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Brazil_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | BOP              |
|---------------------------|-----------------------------|------------------|
| First update logged       | 01/22/20                    | 01/06/20         |
| Last update logged        | 03/14/20                    | 03/14/20         |
| Method                    | Cases by day & country list | Public line list |
| First known case          | 01/22/20                    | 02/25/20         |
| Total confirmed cases     | 151                         | 13               |
| New cases since yesterday | 0                           |                  |
| Total suspected           |                             |                  |
| Total hospitalized        |                             | 4                |
| Total recovered           | 0                           | 0                |
| Total deaths              | 0                           | 0                |

Data sources: BOP, JHU, 


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Brazil_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Brazil mapped](../case_locs/Brazil_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name       |   confirmed |
|----------|----------------|-------------|
| NIH      | Brazil         |           1 |
| JHU      | Brazil         |         151 |
| BOP      | Sao Paulo      |           3 |
| BOP      | Rio de Janeiro |           2 |
| BOP      | Bahia          |           1 |
| BOP      | Espirito Santo |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Brazil_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Brazil_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Brazil cases](../cluster_analysis/Brazil_imported_cases_BOP.png)



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