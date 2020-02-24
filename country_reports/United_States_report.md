# United States
## NSSAC COVID-19 Summary
## 02/24/2020



### Situation Report:
#### Fig 1:
![United States cases](../merged_histories/United_States_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/United_States_merged_daily.csv)

#### Table 1: Situation summary


|                           | Tencent                       | JHU                         | BOP              | NIHFogarty       |
|---------------------------|-------------------------------|-----------------------------|------------------|------------------|
| First update logged       | 02/04/20                      | 01/22/20                    | 01/12/20         | 01/13/20         |
| Last update logged        | 02/24/20                      | 02/23/20                    | 02/22/20         | 02/21/20         |
| Method                    | Daily cases in country scrape | Cases by day & country list | Public line list | Public line list |
| First known case          | 02/04/20                      | 01/22/20                    | 01/20/20         | 01/21/20         |
| Total confirmed cases     | 35                            | 35                          | 17               | 15               |
| New cases since yesterday | 0                             |                             |                  |                  |
| Total suspected           | 0                             |                             |                  |                  |
| Total hospitalized        |                               |                             | 2                | 4                |
| Total recovered           | 3                             | 5                           | 0                |                  |
| Total deaths              | 0                             | 0                           | 0                | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/United_States_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![United States mapped](../case_locs/United_States_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                                 |   confirmed |
|----------|------------------------------------------|-------------|
| NIH      | California, United States                |           8 |
| NIH      | Illinois, United States                  |           2 |
| NIH      | Arizona, United States                   |           1 |
| NIH      | Washington, United States                |           1 |
| NIH      | Wisconsin, United States                 |           1 |
| NIH      | Massachusetts, United States             |           1 |
| NIH      | Texas, United States                     |           1 |
| JHU      | Omaha, NE (From Diamond Princess), US    |          11 |
| JHU      | Travis, CA (From Diamond Princess), US   |           5 |
| JHU      | San Diego County, CA, US                 |           2 |
| JHU      | Chicago, IL, US                          |           2 |
| JHU      | Santa Clara, CA, US                      |           2 |
| JHU      | San Benito, CA, US                       |           2 |
| JHU      | Lackland, TX (From Diamond Princess), US |           2 |
| JHU      | Seattle, WA, US                          |           1 |
| JHU      | Sacramento County, CA, US                |           1 |
| JHU      | Humboldt County, CA, US                  |           1 |
| JHU      | San Antonio, TX, US                      |           1 |
| JHU      | Madison, WI, US                          |           1 |
| JHU      | Boston, MA, US                           |           1 |
| JHU      | Los Angeles, CA, US                      |           1 |
| JHU      | Orange, CA, US                           |           1 |
| JHU      | Tempe, AZ, US                            |           1 |
| BOP      | California, United States                |          10 |
| BOP      | Illinois, United States                  |           2 |
| BOP      | Texas, United States                     |           1 |
| BOP      | Wisconsin, United States                 |           1 |
| BOP      | Massachusetts, United States             |           1 |
| BOP      | Arizona, United States                   |           1 |
| BOP      | Washington State, United States          |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/United_States_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/United_States_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![United States cases](../cluster_analysis/United_States_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![United States cases](../cluster_analysis/United_States_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![United States network](../autochthonous_networks/United_States_network.png)



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