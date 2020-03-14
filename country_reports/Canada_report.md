# Canada
## NSSAC COVID-19 Summary
## 03/13/2020



### Situation Report:
#### Fig 1:
![Canada cases](../merged_histories/Canada_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Canada_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | BOP              | Tencent                       | NIHFogarty       |
|---------------------------|-----------------------------|------------------|-------------------------------|------------------|
| First update logged       | 01/22/20                    | 01/12/20         | 02/04/20                      | 01/13/20         |
| Last update logged        | 03/13/20                    | 03/09/20         | 03/13/20                      | 03/11/20         |
| Method                    | Cases by day & country list | Public line list | Daily cases in country scrape | Public line list |
| First known case          | 01/22/20                    | 01/25/20         | 02/04/20                      | 01/26/20         |
| Total confirmed cases     | 193                         | 64               | 13                            | 12               |
| New cases since yesterday | 76                          |                  | 0                             |                  |
| Total suspected           |                             |                  | 0                             |                  |
| Total hospitalized        |                             | 14               |                               | 3                |
| Total recovered           | 8                           | 1                | 4                             |                  |
| Total deaths              | 1                           | 0                | 0                             | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Canada_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Canada mapped](../case_locs/Canada_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name         |   confirmed |
|----------|------------------|-------------|
| NIH      | Vancouver        |           7 |
| NIH      | Toronto          |           5 |
| JHU      | Ontario          |          74 |
| JHU      | British Columbia |          64 |
| JHU      | Alberta          |          29 |
| JHU      | Quebec           |          17 |
| JHU      | Manitoba         |           4 |
| JHU      | Saskatchewan     |           2 |
| JHU      | Grand Princess   |           2 |
| JHU      | New Brunswick    |           1 |
| BOP      | Ontario          |          28 |
| BOP      | British Columbia |          27 |
| BOP      | Quebec           |           7 |
| BOP      | Alberta          |           2 |

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