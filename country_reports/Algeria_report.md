# Algeria
## NSSAC COVID-19 Summary
## 03/25/2020



### Situation Report:
#### Fig 1:
![Algeria cases](../merged_histories/Algeria_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Algeria_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | NIHFogarty       |
|---------------------------|-----------------------------|------------------|
| First update logged       | 01/22/20                    | 01/13/20         |
| Last update logged        | 03/23/20                    | 03/13/20         |
| Method                    | Cases by day & country list | Public line list |
| First known case          | 01/22/20                    | 02/26/20         |
| Total confirmed cases     | 201                         | 1                |
| New cases since yesterday | 0                           |                  |
| Total suspected           |                             |                  |
| Total hospitalized        |                             | 0                |
| Total recovered           | 65                          |                  |
| Total deaths              | 17                          | 0                |

Data sources: JHU, NIH-Fogarty, 


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Algeria_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Algeria mapped](../case_locs/Algeria_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name   |   confirmed |
|----------|------------|-------------|
| NIH      | Algeria    |           2 |
| JHU      | Algeria    |         201 |
| BOP      | Algeria    |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Algeria_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Algeria_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Algeria cases](../cluster_analysis/Algeria_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Algeria network](../autochthonous_networks/Algeria_network.png)



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