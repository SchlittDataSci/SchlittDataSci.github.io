# Switzerland
## NSSAC COVID-19 Summary
## 03/02/2020



### Situation Report:
#### Fig 1:
![Switzerland cases](../merged_histories/Switzerland_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Switzerland_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | BOP              | Tencent                       | NIHFogarty       |
|---------------------------|-----------------------------|------------------|-------------------------------|------------------|
| First update logged       | 01/22/20                    | 01/12/20         | 02/27/20                      | 01/13/20         |
| Last update logged        | 03/01/20                    | 03/01/20         | 02/28/20                      | 02/28/20         |
| Method                    | Cases by day & country list | Public line list | Daily cases in country scrape | Public line list |
| First known case          | 01/22/20                    | 02/25/20         | 02/27/20                      | 02/25/20         |
| Total confirmed cases     | 27                          | 10               | 6                             | 1                |
| New cases since yesterday | 9                           |                  |                               |                  |
| Total suspected           |                             |                  | 0                             |                  |
| Total hospitalized        |                             | 0                |                               | 0                |
| Total recovered           | 0                           | 0                | 0                             |                  |
| Total deaths              | 0                           | 0                | 0                             | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Switzerland_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Switzerland mapped](../case_locs/Switzerland_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                 |   confirmed |
|----------|--------------------------|-------------|
| NIH      | Bern, Switzerland        |           1 |
| JHU      | Switzerland              |          27 |
| BOP      | Graubuenden, Switzerland |           2 |
| BOP      | Basel, Switzerland       |           2 |
| BOP      | Ticino, Switzerland      |           1 |
| BOP      | Aargau, Switzerland      |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Switzerland_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Switzerland_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Switzerland cases](../cluster_analysis/Switzerland_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Switzerland cases](../cluster_analysis/Switzerland_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Switzerland network](../autochthonous_networks/Switzerland_network.png)



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