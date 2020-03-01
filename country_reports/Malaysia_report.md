# Malaysia
## NSSAC COVID-19 Summary
## 03/01/2020



### Situation Report:
#### Fig 1:
![Malaysia cases](../merged_histories/Malaysia_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Malaysia_merged_daily.csv)

#### Table 1: Situation summary


|                           | BOP              | JHU                         | NIHFogarty       | Tencent                       |
|---------------------------|------------------|-----------------------------|------------------|-------------------------------|
| First update logged       | 01/12/20         | 01/22/20                    | 01/13/20         | 02/05/20                      |
| Last update logged        | 02/29/20         | 02/29/20                    | 02/28/20         | 02/26/20                      |
| Method                    | Public line list | Cases by day & country list | Public line list | Daily cases in country scrape |
| First known case          | 01/25/20         | 01/22/20                    | 01/24/20         | 02/05/20                      |
| Total confirmed cases     | 25               | 25                          | 25               | 22                            |
| New cases since yesterday |                  | 2                           |                  |                               |
| Total suspected           |                  |                             |                  | 0                             |
| Total hospitalized        | 3                |                             | 5                |                               |
| Total recovered           | 3                | 18                          |                  | 15                            |
| Total deaths              | 0                | 0                           | 0                | 0                             |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Malaysia_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Malaysia mapped](../case_locs/Malaysia_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                                   |   confirmed |
|----------|--------------------------------------------|-------------|
| NIH      | Johor, Malaysia                            |           8 |
| NIH      | Langkawi, Malaysia                         |           1 |
| JHU      | Malaysia                                   |          25 |
| BOP      | Wilayah Persekutuan Kuala Lumpur, Malaysia |           6 |
| BOP      | Johor, Malaysia                            |           2 |
| BOP      | Selangor, Malaysia                         |           2 |
| BOP      | Kedah, Malaysia                            |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Malaysia_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Malaysia_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Malaysia cases](../cluster_analysis/Malaysia_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Malaysia cases](../cluster_analysis/Malaysia_imported_cases_BOP.png)



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