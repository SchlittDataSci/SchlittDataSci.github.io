# Japan
## NSSAC COVID-19 Summary
## 02/28/2020



### Situation Report:
#### Fig 1:
![Japan cases](../merged_histories/Japan_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Japan_merged_daily.csv)

#### Table 1: Situation summary


|                           | Tencent                       | BOP              | JHU                         | NIHFogarty       |
|---------------------------|-------------------------------|------------------|-----------------------------|------------------|
| First update logged       | 02/04/20                      | 01/12/20         | 01/22/20                    | 01/13/20         |
| Last update logged        | 02/20/20                      | 02/26/20         | 02/27/20                    | 02/27/20         |
| Method                    | Daily cases in country scrape | Public line list | Cases by day & country list | Public line list |
| First known case          | 02/04/20                      | 01/15/20         | 01/22/20                    | 01/15/20         |
| Total confirmed cases     | 729                           | 667              | 214                         | 190              |
| New cases since yesterday |                               |                  | 25                          | 23               |
| Total suspected           | 0                             |                  |                             |                  |
| Total hospitalized        |                               | 53               |                             | 129              |
| Total recovered           | 1                             | 1                | 22                          |                  |
| Total deaths              | 3                             | 0                | 4                           | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Japan_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Japan mapped](../case_locs/Japan_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                   |   confirmed |
|----------|----------------------------|-------------|
| NIH      | Hokkaido, Japan            |          48 |
| NIH      | Tokyo, Japan               |          25 |
| NIH      | Nagoya City, Japan         |          20 |
| NIH      | Wakayama Prefecture, Japan |          12 |
| NIH      | Chiba Prefecture, Japan    |          11 |
| NIH      | Sagamihara, Japan          |           9 |
| NIH      | Kanagawa, Japan            |           7 |
| NIH      | Aichi Prefecture, Japan    |           7 |
| NIH      | Ishikawa, Japan            |           5 |
| NIH      | Sapporo, Japan             |           5 |
| NIH      | Kumamoto City, Japan       |           4 |
| NIH      | Okinawa Prefecture, Japan  |           3 |
| NIH      | Osaka Prefecture, Japan    |           3 |
| NIH      | Gifu Prefecture, Japan     |           2 |
| NIH      | Fukuoka Prefecture, Japan  |           2 |
| NIH      | Kyoto, Japan               |           2 |
| NIH      | Nara Prefecture, Japan     |           2 |
| NIH      | Kumamoto Prefecture, Japan |           1 |
| NIH      | Nagano Prefecture, Japan   |           1 |
| NIH      | Saitama Prefecture, Japan  |           1 |
| NIH      | Haneda, Japan              |           1 |
| NIH      | Mie, Japan                 |           1 |
| JHU      | Japan                      |         214 |
| BOP      | Kanagawa Prefecture, Japan |         555 |
| BOP      | Tokyo, Japan               |          30 |
| BOP      | Hokkaido, Japan            |          24 |
| BOP      | Aichi Prefecture, Japan    |          14 |
| BOP      | Chiba Prefecture, Japan    |          12 |
| BOP      | Wakayama Prefecture, Japan |           8 |
| BOP      | Saitama, Japan             |           2 |
| BOP      | Kyoto Prefecture, Japan    |           2 |
| BOP      | Kumamoto, Japan            |           2 |
| BOP      | Ishikawa, Japan            |           2 |
| BOP      | Okinawa, Japan             |           1 |
| BOP      | Kumamoto Prefecture, Japan |           1 |
| BOP      | Wakayama, Japan            |           1 |
| BOP      | Nara Prefecture, Japan     |           1 |
| BOP      | Mie, Japan                 |           1 |
| BOP      | Osaka, Japan               |           1 |

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