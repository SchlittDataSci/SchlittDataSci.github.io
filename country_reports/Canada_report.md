# Canada
## NSSAC COVID-19 Summary
## 02/26/2020



### Situation Report:
#### Fig 1:
![Canada cases](../merged_histories/Canada_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Canada_merged_daily.csv)

#### Table 1: Situation summary


|                           | Tencent                       | JHU                         | NIHFogarty       | BOP              |
|---------------------------|-------------------------------|-----------------------------|------------------|------------------|
| First update logged       | 02/04/20                      | 01/22/20                    | 01/13/20         | 01/12/20         |
| Last update logged        | 02/26/20                      | 02/25/20                    | 02/25/20         | 02/22/20         |
| Method                    | Daily cases in country scrape | Cases by day & country list | Public line list | Public line list |
| First known case          | 02/04/20                      | 01/22/20                    | 01/26/20         | 01/25/20         |
| Total confirmed cases     | 11                            | 11                          | 11               | 8                |
| New cases since yesterday | 0                             |                             |                  |                  |
| Total suspected           | 0                             |                             |                  |                  |
| Total hospitalized        |                               |                             | 3                | 3                |
| Total recovered           | 4                             | 3                           |                  | 1                |
| Total deaths              | 0                             | 0                           | 0                | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Canada_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Canada mapped](../case_locs/Canada_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                 |   confirmed |
|----------|--------------------------|-------------|
| NIH      | Vancouver, Canada        |           7 |
| NIH      | Toronto, Canada          |           4 |
| JHU      | British Columbia, Canada |           7 |
| JHU      | Toronto, ON, Canada      |           3 |
| JHU      | London, ON, Canada       |           1 |
| BOP      | British Columbia, Canada |           5 |
| BOP      | Ontario, Canada          |           3 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Canada_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Canada_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Canada cases](../cluster_analysis/Canada_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Canada cases](../cluster_analysis/Canada_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Canada network](../autochthonous_networks/Canada_network.png)



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