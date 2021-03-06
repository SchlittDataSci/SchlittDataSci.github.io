# Spain
## NSSAC COVID-19 Summary
## 03/21/2020



### Situation Report:
#### Fig 1:
![Spain cases](../merged_histories/Spain_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Spain_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | BOP              | NIHFogarty       | Tencent                       |
|---------------------------|-----------------------------|------------------|------------------|-------------------------------|
| First update logged       | 01/22/20                    | 01/06/20         | 01/13/20         | 02/11/20                      |
| Last update logged        | 03/20/20                    | 03/18/20         | 03/13/20         | 03/20/20                      |
| Method                    | Cases by day & country list | Public line list | Public line list | Daily cases in country scrape |
| First known case          | 01/22/20                    | 01/31/20         | 01/31/20         | 02/11/20                      |
| Total confirmed cases     | 20410                       | 981              | 116              | 13                            |
| New cases since yesterday | 2447                        |                  |                  |                               |
| Total suspected           |                             |                  |                  | 0                             |
| Total hospitalized        |                             | 1                | 9                |                               |
| Total recovered           | 1588                        | 0                |                  | 2                             |
| Total deaths              | 1043                        | 0                | 0                | 0                             |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Spain_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Spain mapped](../case_locs/Spain_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name               |   confirmed |
|----------|------------------------|-------------|
| NIH      | Andalusia              |          44 |
| NIH      | Cantabria              |          10 |
| NIH      | Valencia               |           7 |
| NIH      | Castile and Leon       |           7 |
| NIH      | Extremadura            |           6 |
| NIH      | Tenerife               |           6 |
| NIH      | Catalonia              |           6 |
| NIH      | Madrid                 |           5 |
| NIH      | Aragon                 |           5 |
| NIH      | Basque Country         |           4 |
| NIH      | Barcelona              |           3 |
| NIH      | Castilla-La Mancha     |           3 |
| NIH      | La Rioja               |           2 |
| NIH      | Navarra                |           2 |
| NIH      | Castille and Leon      |           1 |
| NIH      | Zaragoza               |           1 |
| NIH      | Castellon              |           1 |
| NIH      | Canary Islands         |           1 |
| NIH      | Mallorca               |           1 |
| NIH      | Asturias               |           1 |
| JHU      | Spain                  |       20410 |
| BOP      | Pais Vasco             |         147 |
| BOP      | La Rioja               |          81 |
| BOP      | Catalonia              |          70 |
| BOP      | Andalusia              |          44 |
| BOP      | Castilla y Leon        |          29 |
| BOP      | Castilla La Mancha     |          25 |
| BOP      | Valencian Community    |          23 |
| BOP      | Cantabria              |          20 |
| BOP      | Canary Islands         |          20 |
| BOP      | Aragon                 |          13 |
| BOP      | Baleares               |           9 |
| BOP      | Principado de Asturias |           6 |
| BOP      | Galicia                |           6 |
| BOP      | Extremadura            |           5 |
| BOP      | Region de Murcia       |           4 |
| BOP      | Navarra                |           3 |
| BOP      | Castilla-La Mancha     |           2 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Spain_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Spain_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Spain cases](../cluster_analysis/Spain_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Spain cases](../cluster_analysis/Spain_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Spain network](../autochthonous_networks/Spain_network.png)



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