# Russia
## NSSAC COVID-19 Summary
## 03/21/2020



### Situation Report:
#### Fig 1:
![Russia cases](../merged_histories/Russia_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Russia_merged_daily.csv)

#### Table 1: Situation summary


|                           | Tencent                       | BOP              | NIHFogarty       |
|---------------------------|-------------------------------|------------------|------------------|
| First update logged       | 02/06/20                      | 01/06/20         | 01/13/20         |
| Last update logged        | 03/20/20                      | 03/18/20         | 03/13/20         |
| Method                    | Daily cases in country scrape | Public line list | Public line list |
| First known case          | 02/06/20                      | 01/31/20         | 01/31/20         |
| Total confirmed cases     | 5                             | 5                | 2                |
| New cases since yesterday |                               |                  |                  |
| Total suspected           | 0                             |                  |                  |
| Total hospitalized        |                               | 1                | 0                |
| Total recovered           | 2                             | 0                |                  |
| Total deaths              | 0                             | 0                | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Russia_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Russia mapped](../case_locs/Russia_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name      |   confirmed |
|----------|---------------|-------------|
| NIH      | Zabaikalsky   |           1 |
| NIH      | Tyumen        |           1 |
| JHU      | Russia        |         253 |
| BOP      | Moscow City   |           2 |
| BOP      | Transbaikalia |           1 |
| BOP      | Tyumen        |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Russia_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Russia_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Russia cases](../cluster_analysis/Russia_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Russia cases](../cluster_analysis/Russia_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Russia network](../autochthonous_networks/Russia_network.png)



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