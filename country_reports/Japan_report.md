# Japan
## NSSAC COVID-19 Summary
## 03/21/2020



### Situation Report:
#### Fig 1:
![Japan cases](../merged_histories/Japan_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Japan_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | BOP              | Tencent                       | NIHFogarty       |
|---------------------------|-----------------------------|------------------|-------------------------------|------------------|
| First update logged       | 01/22/20                    | 01/06/20         | 02/04/20                      | 01/13/20         |
| Last update logged        | 03/20/20                    | 03/18/20         | 02/20/20                      | 03/13/20         |
| Method                    | Cases by day & country list | Public line list | Daily cases in country scrape | Public line list |
| First known case          | 01/22/20                    | 01/15/20         | 02/04/20                      | 01/15/20         |
| Total confirmed cases     | 963                         | 853              | 729                           | 257              |
| New cases since yesterday | 39                          |                  |                               |                  |
| Total suspected           |                             |                  | 0                             |                  |
| Total hospitalized        |                             | 61               |                               | 192              |
| Total recovered           | 191                         | 1                | 1                             |                  |
| Total deaths              | 33                          | 0                | 3                             | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Japan_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Japan mapped](../case_locs/Japan_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name            |   confirmed |
|----------|---------------------|-------------|
| NIH      | Hokkaido            |          66 |
| NIH      | Tokyo               |          29 |
| NIH      | Nagoya City         |          25 |
| NIH      | Aichi Prefecture    |          12 |
| NIH      | Wakayama Prefecture |          12 |
| NIH      | Sapporo             |          11 |
| NIH      | Chiba Prefecture    |          11 |
| NIH      | Kanagawa            |           9 |
| NIH      | Sagamihara          |           9 |
| NIH      | Osaka Prefecture    |           8 |
| NIH      | Ishikawa            |           5 |
| NIH      | Niigata City        |           5 |
| NIH      | Kumamoto City       |           4 |
| NIH      | Sagamihara City     |           4 |
| NIH      | Kochi Prefecture    |           3 |
| NIH      | Okinawa Prefecture  |           3 |
| NIH      | Kyoto               |           3 |
| NIH      | Gifu Prefecture     |           2 |
| NIH      | Nara Prefecture     |           2 |
| NIH      | Fukuoka Prefecture  |           2 |
| NIH      | Funabashi City      |           1 |
| NIH      | Kumamoto Prefecture |           1 |
| NIH      | Asakihawa City      |           1 |
| NIH      | Shizuoka City       |           1 |
| NIH      | Mie                 |           1 |
| NIH      | Oita City           |           1 |
| NIH      | Sendai City         |           1 |
| NIH      | Haneda              |           1 |
| NIH      | Kitakyushu City     |           1 |
| NIH      | Nishimiya City      |           1 |
| NIH      | Saitama Prefecture  |           1 |
| NIH      | Nagano Prefecture   |           1 |
| NIH      | Kobe City           |           1 |
| JHU      | Japan               |         963 |
| BOP      | Kanagawa Prefecture |         564 |
| BOP      | Hokkaido            |          76 |
| BOP      | Tokyo               |          55 |
| BOP      | Aichi Prefecture    |          48 |
| BOP      | Osaka               |          30 |
| BOP      | Chiba Prefecture    |          18 |
| BOP      | Wakayama Prefecture |          10 |
| BOP      | Saitama             |           6 |
| BOP      | Hyogo               |           5 |
| BOP      | Nara Prefecture     |           4 |
| BOP      | Ishikawa            |           4 |
| BOP      | Kumamoto            |           4 |
| BOP      | Akita               |           2 |
| BOP      | Kochi               |           2 |
| BOP      | Kyoto Prefecture    |           2 |
| BOP      | Gifu                |           2 |
| BOP      | Nagano              |           2 |
| BOP      | Yamaguchi           |           2 |
| BOP      | Shizuoka            |           1 |
| BOP      | Shiga               |           1 |
| BOP      | Okinawa             |           1 |
| BOP      | Ehime               |           1 |
| BOP      | Yamanashi           |           1 |
| BOP      | Miyazaki            |           1 |
| BOP      | Mie                 |           1 |

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