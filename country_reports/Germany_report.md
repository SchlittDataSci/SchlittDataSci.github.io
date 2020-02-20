# Germany
## NSSAC COVID-19 Summary
## 02/20/2020



### Situation Report:
#### Fig 1:
![Germany cases](../merged_histories/Germany_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Germany_merged_daily.csv)

#### Table 1: Situation summary


|                           | NIHFogarty       | JHU                         | Tencent                       | BOP              |
|---------------------------|------------------|-----------------------------|-------------------------------|------------------|
| First update logged       | 01/13/20         | 01/22/20                    | 02/04/20                      | 01/12/20         |
| Last update logged        | 02/20/20         | 02/19/20                    | 02/20/20                      | 02/06/20         |
| Method                    | Public line list | Cases by day & country list | Daily cases in country scrape | Public line list |
| First known case          | 01/28/20         | 01/22/20                    | 02/06/20                      | 01/27/20         |
| Total confirmed cases     | 16               | 16                          | 14                            | 13               |
| New cases since yesterday |                  |                             | -2                            |                  |
| Total suspected           |                  |                             | 0                             |                  |
| Total hospitalized        | 0                |                             |                               | 0                |
| Total recovered           |                  | 12                          | 0                             | 1                |
| Total deaths              | 0                | 0                           | 0                             | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Germany_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Germany mapped](../case_locs/Germany_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                      |   confirmed |
|----------|-------------------------------|-------------|
| Tencent  | Germany                       |          16 |
| NIH      | Bavaria, Germany              |          14 |
| NIH      | Frankfurt, Germany            |           2 |
| JHU      | Germany                       |          16 |
| BOP      | Bavaria, Germany              |           9 |
| BOP      | Rhineland-Palatinate, Germany |           2 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Germany_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Germany_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Germany cases](../cluster_analysis/Germany_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Germany cases](../cluster_analysis/Germany_imported_cases_BOP.png)



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