# Japan
## NSSAC COVID-19 Summary
## 03/04/2020



### Situation Report:
#### Fig 1:
![Japan cases](../merged_histories/Japan_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Japan_merged_daily.csv)

#### Table 1: Situation summary


|                           | BOP              | Tencent                       | JHU                         | NIHFogarty       |
|---------------------------|------------------|-------------------------------|-----------------------------|------------------|
| First update logged       | 01/12/20         | 02/04/20                      | 01/22/20                    | 01/13/20         |
| Last update logged        | 03/04/20         | 02/20/20                      | 03/03/20                    | 03/04/20         |
| Method                    | Public line list | Daily cases in country scrape | Cases by day & country list | Public line list |
| First known case          | 01/15/20         | 02/04/20                      | 01/22/20                    | 01/15/20         |
| Total confirmed cases     | 751              | 729                           | 293                         | 257              |
| New cases since yesterday |                  |                               | 19                          | 16               |
| Total suspected           |                  | 0                             |                             |                  |
| Total hospitalized        | 62               |                               |                             | 193              |
| Total recovered           | 1                | 1                             | 43                          |                  |
| Total deaths              | 0                | 3                             | 6                           | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Japan_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Japan mapped](../case_locs/Japan_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                   |   confirmed |
|----------|----------------------------|-------------|
| NIH      | Hokkaido, Japan            |          66 |
| NIH      | Tokyo, Japan               |          29 |
| NIH      | Nagoya City, Japan         |          25 |
| NIH      | Aichi Prefecture, Japan    |          12 |
| NIH      | Wakayama Prefecture, Japan |          12 |
| NIH      | Chiba Prefecture, Japan    |          11 |
| NIH      | Sapporo, Japan             |          11 |
| NIH      | Kanagawa, Japan            |           9 |
| NIH      | Sagamihara, Japan          |           9 |
| NIH      | Osaka Prefecture, Japan    |           8 |
| NIH      | Niigata City, Japan        |           5 |
| NIH      | Ishikawa, Japan            |           5 |
| NIH      | Kumamoto City, Japan       |           4 |
| NIH      | Sagamihara City, Japan     |           4 |
| NIH      | Okinawa Prefecture, Japan  |           3 |
| NIH      | Kyoto, Japan               |           3 |
| NIH      | Kochi Prefecture, Japan    |           3 |
| NIH      | Fukuoka Prefecture, Japan  |           2 |
| NIH      | Gifu Prefecture, Japan     |           2 |
| NIH      | Nara Prefecture, Japan     |           2 |
| NIH      | Sendai City, Japan         |           1 |
| NIH      | Nishimiya City, Japan      |           1 |
| NIH      | Kumamoto Prefecture, Japan |           1 |
| NIH      | Nagano Prefecture, Japan   |           1 |
| NIH      | Oita City, Japan           |           1 |
| NIH      | Kitakyushu City, Japan     |           1 |
| NIH      | Funabashi City, Japan      |           1 |
| NIH      | Shizuoka City, Japan       |           1 |
| NIH      | Haneda, Japan              |           1 |
| NIH      | Asakihawa City, Japan      |           1 |
| NIH      | Mie, Japan                 |           1 |
| NIH      | Saitama Prefecture, Japan  |           1 |
| NIH      | Kobe City, Japan           |           1 |
| JHU      | Japan                      |         293 |
| BOP      | Kanagawa Prefecture, Japan |         564 |
| BOP      | Hokkaido, Japan            |          64 |
| BOP      | Tokyo, Japan               |          34 |
| BOP      | Aichi Prefecture, Japan    |          22 |
| BOP      | Chiba Prefecture, Japan    |          15 |
| BOP      | Wakayama Prefecture, Japan |           9 |
| BOP      | Osaka, Japan               |           7 |
| BOP      | Niigata, Japan             |           4 |
| BOP      | Ishikawa, Japan            |           4 |
| BOP      | Kumamoto, Japan            |           3 |
| BOP      | Saitama, Japan             |           2 |
| BOP      | Gifu, Japan                |           2 |
| BOP      | Kyoto Prefecture, Japan    |           2 |
| BOP      | Nagano, Japan              |           2 |
| BOP      | Shizuoka, Japan            |           1 |
| BOP      | Mie, Japan                 |           1 |
| BOP      | Okinawa, Japan             |           1 |
| BOP      | Kochi, Japan               |           1 |
| BOP      | Ehime, Japan               |           1 |
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