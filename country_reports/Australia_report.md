# Australia
## NSSAC COVID-19 Summary
## 03/04/2020



### Situation Report:
#### Fig 1:
![Australia cases](../merged_histories/Australia_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Australia_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | Tencent                       | BOP              | NIHFogarty       |
|---------------------------|-----------------------------|-------------------------------|------------------|------------------|
| First update logged       | 01/22/20                    | 02/04/20                      | 01/12/20         | 01/13/20         |
| Last update logged        | 03/03/20                    | 03/04/20                      | 03/04/20         | 03/04/20         |
| Method                    | Cases by day & country list | Daily cases in country scrape | Public line list | Public line list |
| First known case          | 01/22/20                    | 02/04/20                      | 01/25/20         | 01/25/20         |
| Total confirmed cases     | 39                          | 23                            | 17               | 15               |
| New cases since yesterday |                             |                               |                  |                  |
| Total suspected           |                             | 0                             |                  |                  |
| Total hospitalized        |                             |                               | 5                | 5                |
| Total recovered           | 11                          | 15                            | 0                |                  |
| Total deaths              | 1                           | 0                             | 0                | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Australia_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Australia mapped](../case_locs/Australia_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                         |   confirmed |
|----------|----------------------------------|-------------|
| NIH      | Queensland, Australia            |           5 |
| NIH      | NSW, Australia                   |           4 |
| NIH      | Victoria, Australia              |           4 |
| NIH      | South Australia, Australia       |           2 |
| JHU      | New South Wales, Australia       |          13 |
| JHU      | Queensland, Australia            |          11 |
| JHU      | Victoria, Australia              |           9 |
| JHU      | South Australia, Australia       |           3 |
| JHU      | Western Australia, Australia     |           2 |
| JHU      | Tasmania, Australia              |           1 |
| JHU      | From Diamond Princess, Australia |           0 |
| BOP      | Queensland, Australia            |           6 |
| BOP      | New South Wales, Australia       |           4 |
| BOP      | Victoria, Australia              |           4 |
| BOP      | South Australia, Australia       |           2 |
| BOP      | Tasmania, Australia              |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Australia_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Australia_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Australia cases](../cluster_analysis/Australia_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Australia cases](../cluster_analysis/Australia_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Australia network](../autochthonous_networks/Australia_network.png)



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