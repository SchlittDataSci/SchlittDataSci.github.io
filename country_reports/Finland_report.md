# Finland
## NSSAC COVID-19 Summary
## 02/21/2020



### Situation Report:
#### Fig 1:
![Finland cases](../merged_histories/Finland_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Finland_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | NIHFogarty       | BOP              | Tencent                       |
|---------------------------|-----------------------------|------------------|------------------|-------------------------------|
| First update logged       | 01/22/20                    | 01/13/20         | 01/12/20         | 02/04/20                      |
| Last update logged        | 02/20/20                    | 02/20/20         | 02/06/20         | 02/21/20                      |
| Method                    | Cases by day & country list | Public line list | Public line list | Daily cases in country scrape |
| First known case          | 01/22/20                    | 01/29/20         | 01/29/20         | 02/06/20                      |
| Total confirmed cases     | 1                           | 1                | 1                | 0                             |
| New cases since yesterday |                             |                  |                  | 0                             |
| Total suspected           |                             |                  |                  | 0                             |
| Total hospitalized        |                             | 1                | 0                |                               |
| Total recovered           | 1                           |                  | 0                | 0                             |
| Total deaths              | 0                           | 0                | 0                | 0                             |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Finland_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Finland mapped](../case_locs/Finland_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name         |   confirmed |
|----------|------------------|-------------|
| Tencent  | Finland          |           1 |
| NIH      | Lapland, Finland |           1 |
| JHU      | Finland          |           1 |
| BOP      | Lapland, Finland |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Finland_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Finland_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Finland cases](../cluster_analysis/Finland_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Finland cases](../cluster_analysis/Finland_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Finland network](../autochthonous_networks/Finland_network.png)



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