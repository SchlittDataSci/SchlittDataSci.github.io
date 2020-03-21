# Hong Kong
## NSSAC COVID-19 Summary
## 03/21/2020



### Situation Report:
#### Fig 1:
![Hong Kong cases](../merged_histories/Hong_Kong_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Hong_Kong_merged_daily.csv)

#### Table 1: Situation summary


|                           | Tencent                       | NIHFogarty       | BOP              |
|---------------------------|-------------------------------|------------------|------------------|
| First update logged       | 02/04/20                      | 01/13/20         | 01/06/20         |
| Last update logged        | 03/21/20                      | 03/13/20         | 03/18/20         |
| Method                    | Daily cases in country scrape | Public line list | Public line list |
| First known case          | 02/04/20                      | 01/22/20         | 01/22/20         |
| Total confirmed cases     | 273                           | 102              | 47               |
| New cases since yesterday | 17                            |                  |                  |
| Total suspected           | 0                             |                  |                  |
| Total hospitalized        |                               | 75               | 29               |
| Total recovered           | 98                            |                  | 0                |
| Total deaths              | 4                             | 0                | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Hong_Kong_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Hong Kong mapped](../case_locs/Hong_Kong_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name     |   confirmed |
|----------|--------------|-------------|
| NIH      | Kowloon      |           4 |
| NIH      | Kwun Tong    |           2 |
| NIH      | Kwai Chung   |           2 |
| NIH      | Zhuhai       |           1 |
| NIH      | Fo Tan       |           1 |
| NIH      | Ngau Chi Wan |           1 |
| NIH      | Tsing Yi     |           1 |
| NIH      | Yau Ma Tei   |           1 |
| NIH      | Wan Chai     |           1 |
| BOP      | Hong Kong    |          47 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Hong_Kong_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Hong_Kong_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Hong Kong cases](../cluster_analysis/Hong_Kong_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Hong Kong cases](../cluster_analysis/Hong_Kong_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Hong Kong network](../autochthonous_networks/Hong_Kong_network.png)



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