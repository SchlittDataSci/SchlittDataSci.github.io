# Pakistan
## NSSAC COVID-19 Summary
## 03/21/2020



### Situation Report:
#### Fig 1:
![Pakistan cases](../merged_histories/Pakistan_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Pakistan_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | BOP              |
|---------------------------|-----------------------------|------------------|
| First update logged       | 01/22/20                    | 01/06/20         |
| Last update logged        | 03/20/20                    | 03/18/20         |
| Method                    | Cases by day & country list | Public line list |
| First known case          | 01/22/20                    | 02/26/20         |
| Total confirmed cases     | 501                         | 6                |
| New cases since yesterday | 47                          |                  |
| Total suspected           |                             |                  |
| Total hospitalized        |                             | 1                |
| Total recovered           | 13                          | 0                |
| Total deaths              | 3                           | 0                |

Data sources: BOP, JHU, 


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Pakistan_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Pakistan mapped](../case_locs/Pakistan_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                           |   confirmed |
|----------|------------------------------------|-------------|
| NIH      | Pakistan                           |           1 |
| JHU      | Pakistan                           |         501 |
| BOP      | Sindh                              |           3 |
| BOP      | Gilgit-Baltistan                   |           2 |
| BOP      | Federally Administered Tribal Area |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Pakistan_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Pakistan_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Pakistan cases](../cluster_analysis/Pakistan_imported_cases_BOP.png)



Data source: BOP


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