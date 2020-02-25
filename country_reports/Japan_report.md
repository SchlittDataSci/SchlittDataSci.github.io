# Japan
## NSSAC COVID-19 Summary
## 02/24/2020



### Situation Report:
#### Fig 1:
![Japan cases](../merged_histories/Japan_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Japan_merged_daily.csv)

#### Table 1: Situation summary


|                           | Tencent                       | BOP              | JHU                         | NIHFogarty       |
|---------------------------|-------------------------------|------------------|-----------------------------|------------------|
| First update logged       | 02/04/20                      | 01/12/20         | 01/22/20                    | 01/13/20         |
| Last update logged        | 02/20/20                      | 02/22/20         | 02/24/20                    | 02/24/20         |
| Method                    | Daily cases in country scrape | Public line list | Cases by day & country list | Public line list |
| First known case          | 02/04/20                      | 01/15/20         | 01/22/20                    | 01/15/20         |
| Total confirmed cases     | 729                           | 650              | 159                         | 139              |
| New cases since yesterday |                               |                  | 12                          | 12               |
| Total suspected           | 0                             |                  |                             |                  |
| Total hospitalized        |                               | 51               |                             | 93               |
| Total recovered           | 1                             | 1                | 22                          |                  |
| Total deaths              | 3                             | 0                | 1                           | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Japan_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Japan mapped](../case_locs/Japan_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                   |   confirmed |
|----------|----------------------------|-------------|
| NIH      | Hokkaido, Japan            |          26 |
| NIH      | Tokyo, Japan               |          21 |
| NIH      | Wakayama Prefecture, Japan |          12 |
| NIH      | Nagoya City, Japan         |          10 |
| NIH      | Sagamihara, Japan          |           9 |
| NIH      | Chiba Prefecture, Japan    |           8 |
| NIH      | Aichi Prefecture, Japan    |           7 |
| NIH      | Kanagawa, Japan            |           5 |
| NIH      | Sapporo, Japan             |           4 |
| NIH      | Ishikawa, Japan            |           3 |
| NIH      | Okinawa Prefecture, Japan  |           3 |
| NIH      | Nara Prefecture, Japan     |           2 |
| NIH      | Kumamoto City, Japan       |           2 |
| NIH      | Kyoto, Japan               |           2 |
| NIH      | Fukuoka Prefecture, Japan  |           2 |
| NIH      | Osaka Prefecture, Japan    |           1 |
| NIH      | Saitama Prefecture, Japan  |           1 |
| NIH      | Haneda, Japan              |           1 |
| NIH      | Kumamoto Prefecture, Japan |           1 |
| NIH      | Mie, Japan                 |           1 |
| JHU      | Japan                      |         159 |
| BOP      | Kanagawa, Japan            |         463 |
| BOP      | Kanagawa Prefecture, Japan |          90 |
| BOP      | Tokyo, Japan               |          28 |
| BOP      | Hokkaido, Japan            |          15 |
| BOP      | Aichi, Japan               |          11 |
| BOP      | Chiba, Japan               |          10 |
| BOP      | Wakayama Prefecture, Japan |           5 |
| BOP      | Wakayama, Japan            |           4 |
| BOP      | Kumamoto, Japan            |           2 |
| BOP      | Saitama, Japan             |           2 |
| BOP      | Ishikawa, Japan            |           2 |
| BOP      | Kyoto Prefecture, Japan    |           2 |
| BOP      | Osaka, Japan               |           1 |
| BOP      | Okinawa, Japan             |           1 |
| BOP      | Mie, Japan                 |           1 |
| BOP      | Nara Prefecture, Japan     |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Japan_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Japan_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Japan cases](../cluster_analysis/Japan_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Japan cases](../cluster_analysis/Japan_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Japan network](../autochthonous_networks/Japan_network.png)



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