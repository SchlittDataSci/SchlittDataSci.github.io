# Singapore
## NSSAC COVID-19 Summary
## 03/08/2020



### Situation Report:
#### Fig 1:
![Singapore cases](../merged_histories/Singapore_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Singapore_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | NIHFogarty       | Tencent                       | BOP              |
|---------------------------|-----------------------------|------------------|-------------------------------|------------------|
| First update logged       | 01/22/20                    | 01/13/20         | 02/04/20                      | 01/12/20         |
| Last update logged        | 03/07/20                    | 03/06/20         | 03/08/20                      | 03/04/20         |
| Method                    | Cases by day & country list | Public line list | Daily cases in country scrape | Public line list |
| First known case          | 01/22/20                    | 01/24/20         | 02/04/20                      | 01/23/20         |
| Total confirmed cases     | 138                         | 112              | 102                           | 93               |
| New cases since yesterday |                             |                  | 0                             |                  |
| Total suspected           |                             |                  | 0                             |                  |
| Total hospitalized        |                             | 95               |                               | 69               |
| Total recovered           | 78                          |                  | 72                            | 3                |
| Total deaths              | 0                           | 0                | 0                             | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Singapore_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Singapore mapped](../case_locs/Singapore_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name   |   confirmed |
|----------|------------|-------------|
| NIH      | Singapore  |         138 |
| JHU      | Singapore  |         138 |
| BOP      | Singapore  |         138 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Singapore_case_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Singapore cases](../cluster_analysis/Singapore_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Singapore cases](../cluster_analysis/Singapore_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Singapore network](../autochthonous_networks/Singapore_network.png)



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