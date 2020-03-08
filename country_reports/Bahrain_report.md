# Bahrain
## NSSAC COVID-19 Summary
## 03/08/2020



### Situation Report:
#### Fig 1:
![Bahrain cases](../merged_histories/Bahrain_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Bahrain_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | Tencent                       | BOP              | NIHFogarty       |
|---------------------------|-----------------------------|-------------------------------|------------------|------------------|
| First update logged       | 01/22/20                    | 02/25/20                      | 01/12/20         | 01/13/20         |
| Last update logged        | 03/07/20                    | 03/07/20                      | 03/04/20         | 03/06/20         |
| Method                    | Cases by day & country list | Daily cases in country scrape | Public line list | Public line list |
| First known case          | 01/22/20                    | 02/25/20                      | 02/24/20         | 02/24/20         |
| Total confirmed cases     | 85                          | 33                            | 20               | 17               |
| New cases since yesterday | 25                          | 0                             |                  |                  |
| Total suspected           |                             | 0                             |                  |                  |
| Total hospitalized        |                             |                               | 1                | 0                |
| Total recovered           | 4                           | 0                             | 0                |                  |
| Total deaths              | 0                           | 0                             | 0                | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Bahrain_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Bahrain mapped](../case_locs/Bahrain_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name   |   confirmed |
|----------|------------|-------------|
| NIH      | Bahrain    |          85 |
| JHU      | Bahrain    |          85 |
| BOP      | Bahrain    |          85 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Bahrain_case_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Bahrain cases](../cluster_analysis/Bahrain_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Bahrain cases](../cluster_analysis/Bahrain_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Bahrain network](../autochthonous_networks/Bahrain_network.png)



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