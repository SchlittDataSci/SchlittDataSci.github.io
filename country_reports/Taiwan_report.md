# Taiwan
## NSSAC COVID-19 Summary
## 02/20/2020



### Situation Report:
#### Fig 1:
![Taiwan cases](../merged_histories/Taiwan_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Taiwan_merged_daily.csv)

#### Table 1: Situation summary


|                           | Tencent                       | NIHFogarty       | JHU                         | BOP              |
|---------------------------|-------------------------------|------------------|-----------------------------|------------------|
| First update logged       | 02/04/20                      | 01/13/20         | 01/22/20                    | 01/12/20         |
| Last update logged        | 02/20/20                      | 02/20/20         | 02/19/20                    | 02/06/20         |
| Method                    | Daily cases in country scrape | Public line list | Cases by day & country list | Public line list |
| First known case          | 02/04/20                      | 01/21/20         | 01/22/20                    | 02/06/20         |
| Total confirmed cases     | 24                            | 23               | 23                          | 3                |
| New cases since yesterday | 1                             |                  |                             |                  |
| Total suspected           | 0                             |                  |                             |                  |
| Total hospitalized        |                               | 14               |                             | 3                |
| Total recovered           | 2                             |                  | 2                           | 0                |
| Total deaths              | 1                             | 0                | 1                           | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Taiwan_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Taiwan mapped](../case_locs/Taiwan_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name       |   confirmed |
|----------|----------------|-------------|
| NIH      | Taiwan, Taiwan |          23 |
| JHU      | Taiwan, Taiwan |          23 |
| BOP      | Taiwan         |           3 |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Taiwan_case_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Taiwan cases](../cluster_analysis/Taiwan_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Taiwan cases](../cluster_analysis/Taiwan_imported_cases_BOP.png)



Data source: BOP


### Data sources:
* **[BOP](https://github.com/beoutbreakprepared/nCoV2019)**
* **[JHU](https://github.com/CSSEGISandData/COVID-19)** 
* **[NIH-Fogarty](https://docs.google.com/spreadsheets/d/1jS24DjSPVWa4iuxuD4OAXrE3QeI8c9BC1hSlqr-NMiU/edit#gid=1187587451)** 
* **[Tencent](https://news.qq.com/zt2020/page/feiyan.htm)** 

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-158816269-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-158816269-1');
</script>