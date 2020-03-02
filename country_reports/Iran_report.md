# Iran
## NSSAC COVID-19 Summary
## 03/01/2020



### Situation Report:
#### Fig 1:
![Iran cases](../merged_histories/Iran_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Iran_merged_daily.csv)

#### Table 1: Situation summary


|                           | BOP              | JHU                         | NIHFogarty       | Tencent                       |
|---------------------------|------------------|-----------------------------|------------------|-------------------------------|
| First update logged       | 01/12/20         | 01/22/20                    | 01/13/20         | 02/20/20                      |
| Last update logged        | 02/29/20         | 02/29/20                    | 02/28/20         | 03/01/20                      |
| Method                    | Public line list | Cases by day & country list | Public line list | Daily cases in country scrape |
| First known case          | 02/19/20         | 01/22/20                    | 02/19/20         | 02/20/20                      |
| Total confirmed cases     | 593              | 593                         | 593              | 270                           |
| New cases since yesterday |                  |                             |                  | 0                             |
| Total suspected           |                  |                             |                  | 0                             |
| Total hospitalized        | 0                |                             | 0                |                               |
| Total recovered           | 0                | 123                         |                  | 49                            |
| Total deaths              | 0                | 43                          | 0                | 26                            |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Iran_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Iran mapped](../case_locs/Iran_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name      |   confirmed |
|----------|---------------|-------------|
| NIH      | Qom, Iran     |          11 |
| NIH      | Tehran, Iran  |           4 |
| NIH      | Guilan, Iran  |           2 |
| NIH      | Araq, Iran    |           1 |
| JHU      | Iran          |         593 |
| BOP      | Qom, Iran     |          11 |
| BOP      | Tehran, Iran  |           4 |
| BOP      | Gilan, Iran   |           2 |
| BOP      | Markazi, Iran |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Iran_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Iran_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Iran cases](../cluster_analysis/Iran_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Iran cases](../cluster_analysis/Iran_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Iran network](../autochthonous_networks/Iran_network.png)



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