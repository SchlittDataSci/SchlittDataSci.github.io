# Iran
## NSSAC COVID-19 Summary
## 03/21/2020



### Situation Report:
#### Fig 1:
![Iran cases](../merged_histories/Iran_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Iran_merged_daily.csv)

#### Table 1: Situation summary


|                           | BOP              | Tencent                       | NIHFogarty       |
|---------------------------|------------------|-------------------------------|------------------|
| First update logged       | 01/06/20         | 02/20/20                      | 01/13/20         |
| Last update logged        | 03/18/20         | 03/20/20                      | 03/13/20         |
| Method                    | Public line list | Daily cases in country scrape | Public line list |
| First known case          | 02/19/20         | 02/20/20                      | 02/19/20         |
| Total confirmed cases     | 3512             | 270                           | 18               |
| New cases since yesterday |                  |                               |                  |
| Total suspected           |                  | 0                             |                  |
| Total hospitalized        | 0                |                               | 0                |
| Total recovered           | 0                | 49                            |                  |
| Total deaths              | 0                | 26                            | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Iran_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Iran mapped](../case_locs/Iran_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                    |   confirmed |
|----------|-----------------------------|-------------|
| NIH      | Qom                         |          11 |
| NIH      | Tehran                      |           4 |
| NIH      | Guilan                      |           2 |
| NIH      | Araq                        |           1 |
| JHU      | Iran                        |       19644 |
| BOP      | Tehran                      |        1352 |
| BOP      | Qom                         |         386 |
| BOP      | Gilan                       |         333 |
| BOP      | Esfahan                     |         238 |
| BOP      | Markazi                     |         180 |
| BOP      | Alborz                      |         173 |
| BOP      | Mazandaran                  |         121 |
| BOP      | Qazvin                      |         111 |
| BOP      | Razavi Khorasan             |          89 |
| BOP      | Fars                        |          68 |
| BOP      | East Azarbaijan             |          65 |
| BOP      | Khuzestan                   |          62 |
| BOP      | Semnan                      |          60 |
| BOP      | Golestan                    |          37 |
| BOP      | Lorestan                    |          30 |
| BOP      | Ardebil                     |          26 |
| BOP      | Kermanshah                  |          22 |
| BOP      | Sistan and Baluchestan      |          19 |
| BOP      | Kordestan                   |          18 |
| BOP      | Kerman                      |          18 |
| BOP      | Hamadan                     |          16 |
| BOP      | Zanjan                      |          15 |
| BOP      | South Khorasan              |          15 |
| BOP      | Hormozgan                   |          13 |
| BOP      | Ilam                        |          11 |
| BOP      | West Azarbaijan             |          10 |
| BOP      | Chahar Mahall and Bakhtiari |           9 |
| BOP      | Yazd                        |           7 |
| BOP      | North Khorasan              |           3 |
| BOP      | Bushehr                     |           3 |
| BOP      | Kohgiluyeh and Buyer Ahmad  |           2 |

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