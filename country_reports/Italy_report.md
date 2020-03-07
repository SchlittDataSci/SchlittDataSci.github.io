# Italy
## NSSAC COVID-19 Summary
## 03/06/2020



### Situation Report:
#### Fig 1:
![Italy cases](../merged_histories/Italy_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Italy_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | Tencent                       | BOP              | NIHFogarty       |
|---------------------------|-----------------------------|-------------------------------|------------------|------------------|
| First update logged       | 01/22/20                    | 02/04/20                      | 01/12/20         | 01/13/20         |
| Last update logged        | 03/06/20                    | 03/06/20                      | 03/04/20         | 03/06/20         |
| Method                    | Cases by day & country list | Daily cases in country scrape | Public line list | Public line list |
| First known case          | 01/22/20                    | 02/04/20                      | 01/31/20         | 01/31/20         |
| Total confirmed cases     | 4636                        | 653                           | 588              | 86               |
| New cases since yesterday | 778                         | 0                             |                  |                  |
| Total suspected           |                             | 0                             |                  |                  |
| Total hospitalized        |                             |                               | 3                | 1                |
| Total recovered           | 523                         | 45                            | 0                |                  |
| Total deaths              | 197                         | 17                            | 0                | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Italy_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Italy mapped](../case_locs/Italy_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name            |   confirmed |
|----------|---------------------|-------------|
| NIH      | Lombardy            |          61 |
| NIH      | Veneto              |          17 |
| NIH      | Rome                |           3 |
| NIH      | Emilia-Romagna      |           2 |
| NIH      | Milan               |           2 |
| NIH      | Piedmont            |           1 |
| JHU      | Italy               |        4636 |
| BOP      | Lombardia           |         364 |
| BOP      | Veneto              |          98 |
| BOP      | Emilia-Romagna      |          89 |
| BOP      | Liguria             |          19 |
| BOP      | Sicily              |           4 |
| BOP      | Campania            |           3 |
| BOP      | Marche              |           2 |
| BOP      | Lazio               |           2 |
| BOP      | Toscana             |           2 |
| BOP      | Trentino-Alto Adige |           1 |
| BOP      | Piemonte            |           1 |
| BOP      | Pesaro Urbino       |           1 |
| BOP      | Puglia              |           1 |
| BOP      | Abruzzo             |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Italy_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Italy_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Italy cases](../cluster_analysis/Italy_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Italy cases](../cluster_analysis/Italy_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Italy network](../autochthonous_networks/Italy_network.png)



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