# Philippines
## NSSAC COVID-19 Summary
## 02/27/2020



### Situation Report:
#### Fig 1:
![Philippines cases](../merged_histories/Philippines_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Philippines_merged_daily.csv)

#### Table 1: Situation summary


|                           | NIHFogarty       | Tencent                       | BOP              | JHU                         |
|---------------------------|------------------|-------------------------------|------------------|-----------------------------|
| First update logged       | 01/13/20         | 02/04/20                      | 01/12/20         | 01/22/20                    |
| Last update logged        | 02/27/20         | 02/27/20                      | 02/26/20         | 02/26/20                    |
| Method                    | Public line list | Daily cases in country scrape | Public line list | Cases by day & country list |
| First known case          | 02/02/20         | 02/04/20                      | 01/30/20         | 01/22/20                    |
| Total confirmed cases     | 3                | 3                             | 3                | 3                           |
| New cases since yesterday |                  | 0                             |                  |                             |
| Total suspected           |                  | 0                             |                  |                             |
| Total hospitalized        | 1                |                               | 0                |                             |
| Total recovered           |                  | 1                             | 0                | 1                           |
| Total deaths              | 0                | 1                             | 1                | 1                           |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Philippines_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Philippines mapped](../case_locs/Philippines_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                                   |   confirmed |
|----------|--------------------------------------------|-------------|
| NIH      | Manila, Philippines                        |           2 |
| NIH      | Phillipines, Philippines                   |           1 |
| JHU      | Philippines                                |           3 |
| BOP      | National Capital Region (NCR), Philippines |           2 |
| BOP      | Cebu, Philippines                          |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Philippines_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Philippines_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Philippines cases](../cluster_analysis/Philippines_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Philippines cases](../cluster_analysis/Philippines_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Philippines network](../autochthonous_networks/Philippines_network.png)



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