# Canada
## NSSAC COVID-19 Summary
## 03/21/2020



### Situation Report:
#### Fig 1:
![Canada cases](../merged_histories/Canada_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Canada_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | BOP              | Tencent                       | NIHFogarty       |
|---------------------------|-----------------------------|------------------|-------------------------------|------------------|
| First update logged       | 01/22/20                    | 01/06/20         | 02/04/20                      | 01/13/20         |
| Last update logged        | 03/20/20                    | 03/18/20         | 03/20/20                      | 03/13/20         |
| Method                    | Cases by day & country list | Public line list | Daily cases in country scrape | Public line list |
| First known case          | 01/22/20                    | 01/25/20         | 02/04/20                      | 01/26/20         |
| Total confirmed cases     | 943                         | 308              | 13                            | 12               |
| New cases since yesterday | 143                         |                  |                               |                  |
| Total suspected           |                             |                  | 0                             |                  |
| Total hospitalized        |                             | 15               |                               | 3                |
| Total recovered           | 9                           | 1                | 4                             |                  |
| Total deaths              | 12                          | 0                | 0                             | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Canada_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Canada mapped](../case_locs/Canada_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                  |   confirmed |
|----------|---------------------------|-------------|
| NIH      | Vancouver                 |           7 |
| NIH      | Toronto                   |           5 |
| JHU      | Ontario                   |         308 |
| JHU      | British Columbia          |         271 |
| JHU      | Alberta                   |         146 |
| JHU      | Quebec                    |         139 |
| JHU      | Saskatchewan              |          20 |
| JHU      | Manitoba                  |          17 |
| JHU      | Nova Scotia               |          15 |
| JHU      | New Brunswick             |          11 |
| JHU      | Grand Princess            |          10 |
| JHU      | Newfoundland and Labrador |           4 |
| JHU      | Prince Edward Island      |           2 |
| BOP      | Alberta                   |          87 |
| BOP      | Quebec                    |          70 |
| BOP      | Ontario                   |          57 |
| BOP      | British Columbia          |          53 |
| BOP      | Manitoba                  |          15 |
| BOP      | Saskatchewan              |           8 |
| BOP      | Nova Scotia               |           7 |
| BOP      | New Brunswick             |           7 |
| BOP      | Newfoundland and Labrador |           3 |
| BOP      | Prince Edward Island      |           1 |

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