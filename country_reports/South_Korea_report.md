# South Korea
## NSSAC COVID-19 Summary
## 03/12/2020



### Situation Report:
#### Fig 1:
![South Korea cases](../merged_histories/South_Korea_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/South_Korea_merged_daily.csv)

#### Table 1: Situation summary


|                           | Tencent                       | BOP              | NIHFogarty       |
|---------------------------|-------------------------------|------------------|------------------|
| First update logged       | 02/04/20                      | 01/12/20         | 01/13/20         |
| Last update logged        | 03/12/20                      | 03/09/20         | 03/11/20         |
| Method                    | Daily cases in country scrape | Public line list | Public line list |
| First known case          | 02/04/20                      | 01/20/20         | 01/20/20         |
| Total confirmed cases     | 3150                          | 938              | 114              |
| New cases since yesterday | 0                             |                  |                  |
| Total suspected           | 0                             |                  |                  |
| Total hospitalized        |                               | 24               | 9                |
| Total recovered           | 24                            | 0                |                  |
| Total deaths              | 13                            | 0                | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/South_Korea_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![South Korea mapped](../case_locs/South_Korea_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name          |   confirmed |
|----------|-------------------|-------------|
| NIH      | Seoul             |           2 |
| BOP      | Daegu             |         552 |
| BOP      | North Gyeongsang  |         250 |
| BOP      | Busan             |          40 |
| BOP      | Seoul             |          33 |
| BOP      | Gyeonggi          |          16 |
| BOP      | South Gyeongsang  |          10 |
| BOP      | Gangwon           |           5 |
| BOP      | South Chungcheong |           4 |
| BOP      | Daejeon           |           4 |
| BOP      | Gwangju           |           4 |
| BOP      | North Chungcheong |           3 |
| BOP      | Jeju              |           2 |
| BOP      | Ulsan             |           2 |
| BOP      | Incheon           |           2 |
| BOP      | Sejong            |           1 |
| BOP      | North Jeolla      |           1 |
| BOP      | South Jeolla      |           1 |

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