# South Korea
## NSSAC COVID-19 Summary
## 02/24/2020



### Situation Report:
#### Fig 1:
![South Korea cases](../merged_histories/South_Korea_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/South_Korea_merged_daily.csv)

#### Table 1: Situation summary


|                           | Tencent                       | JHU                         | BOP              | NIHFogarty       |
|---------------------------|-------------------------------|-----------------------------|------------------|------------------|
| First update logged       | 02/04/20                      | 01/22/20                    | 01/12/20         | 01/13/20         |
| Last update logged        | 02/24/20                      | 02/23/20                    | 02/22/20         | 02/21/20         |
| Method                    | Daily cases in country scrape | Cases by day & country list | Public line list | Public line list |
| First known case          | 02/04/20                      | 01/22/20                    | 01/20/20         | 01/20/20         |
| Total confirmed cases     | 833                           | 602                         | 257              | 104              |
| New cases since yesterday | 70                            |                             |                  |                  |
| Total suspected           | 0                             |                             |                  |                  |
| Total hospitalized        |                               |                             | 21               | 8                |
| Total recovered           | 12                            | 18                          | 0                |                  |
| Total deaths              | 8                             | 6                           | 0                | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/South_Korea_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![South Korea mapped](../case_locs/South_Korea_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name               |   confirmed |
|----------|------------------------|-------------|
| NIH      | Seoul, South Korea     |           1 |
| JHU      | South Korea            |         602 |
| BOP      | Gyeongbuk, South Korea |         117 |
| BOP      | Yeongnam, South Korea  |          94 |
| BOP      | Gangwon, South Korea   |           5 |
| BOP      | Gyeonggi, South Korea  |           3 |
| BOP      | Honam, South Korea     |           3 |
| BOP      | Chungbuk, South Korea  |           2 |
| BOP      | Jeonbuk, South Korea   |           1 |
| BOP      | Hoseo, South Korea     |           1 |
| BOP      | Jeonnam, South Korea   |           1 |
| BOP      | Jeju, South Korea      |           1 |
| BOP      | Ulsan, South Korea     |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/South_Korea_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/South_Korea_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![South Korea cases](../cluster_analysis/South_Korea_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![South Korea cases](../cluster_analysis/South_Korea_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![South Korea network](../autochthonous_networks/South_Korea_network.png)



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