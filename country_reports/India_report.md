# India
## NSSAC COVID-19 Summary
## 02/20/2020



### Situation Report:
#### Fig 1:
![India cases](../merged_histories/India_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/India_merged_daily.csv)

#### Table 1: Situation summary


|                           | NIHFogarty       | Tencent                       | JHU                         | BOP              |
|---------------------------|------------------|-------------------------------|-----------------------------|------------------|
| First update logged       | 01/13/20         | 02/04/20                      | 01/22/20                    | 01/12/20         |
| Last update logged        | 02/20/20         | 02/20/20                      | 02/19/20                    | 02/06/20         |
| Method                    | Public line list | Daily cases in country scrape | Cases by day & country list | Public line list |
| First known case          | 01/30/20         | 02/06/20                      | 01/22/20                    | 01/30/20         |
| Total confirmed cases     | 3                | 3                             | 3                           | 3                |
| New cases since yesterday |                  | 0                             |                             |                  |
| Total suspected           |                  | 0                             |                             |                  |
| Total hospitalized        | 0                |                               |                             | 0                |
| Total recovered           |                  | 0                             | 3                           | 0                |
| Total deaths              | 0                | 0                             | 0                           | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/India_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![India mapped](../case_locs/India_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name         |   confirmed |
|----------|------------------|-------------|
| Tencent  | India            |           3 |
| NIH      | Kerala, India    |           2 |
| NIH      | Alappuzha, India |           1 |
| JHU      | India            |           3 |
| BOP      | Kerala, India    |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/India_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/India_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![India cases](../cluster_analysis/India_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![India cases](../cluster_analysis/India_imported_cases_BOP.png)



Data source: BOP


### Data sources:
* **[BOP](https://github.com/beoutbreakprepared/nCoV2019)**
* **[JHU](https://github.com/CSSEGISandData/COVID-19)** 
* **[NIH-Fogarty](https://docs.google.com/spreadsheets/d/1jS24DjSPVWa4iuxuD4OAXrE3QeI8c9BC1hSlqr-NMiU/edit#gid=1187587451)** 
* **[Tencent](https://news.qq.com/zt2020/page/feiyan.htm)**
* **[Natural Earth](https://www.naturalearthdata.com/forums/forum/natural-earth-map-data/cultural-vectors/admin-1-states-provinces-and-their-boundaries/)

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-158816269-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-158816269-1');
</script>