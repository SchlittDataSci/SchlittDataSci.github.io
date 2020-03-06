# United States
## NSSAC COVID-19 Summary
## 03/06/2020



### Situation Report:
#### Fig 1:
![United States cases](../merged_histories/United_States_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/United_States_merged_daily.csv)

#### Table 1: Situation summary


|                           | JHU                         | NIHFogarty       | Tencent                       | BOP              |
|---------------------------|-----------------------------|------------------|-------------------------------|------------------|
| First update logged       | 01/22/20                    | 01/13/20         | 02/04/20                      | 01/12/20         |
| Last update logged        | 03/05/20                    | 03/05/20         | 03/06/20                      | 03/04/20         |
| Method                    | Cases by day & country list | Public line list | Daily cases in country scrape | Public line list |
| First known case          | 01/22/20                    | 01/21/20         | 02/04/20                      | 01/20/20         |
| Total confirmed cases     | 221                         | 140              | 60                            | 40               |
| New cases since yesterday |                             |                  | 0                             |                  |
| Total suspected           |                             |                  | 0                             |                  |
| Total hospitalized        |                             | 4                |                               | 2                |
| Total recovered           | 8                           |                  | 3                             | 0                |
| Total deaths              | 12                          | 0                | 0                             | 2                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/United_States_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![United States mapped](../case_locs/United_States_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                                    |   confirmed |
|----------|---------------------------------------------|-------------|
| NIH      | USA                                         |          44 |
| NIH      | California                                  |          37 |
| NIH      | Washington                                  |          29 |
| NIH      | New York                                    |           6 |
| NIH      | Illinois                                    |           4 |
| NIH      | Oregon                                      |           3 |
| NIH      | Florida                                     |           3 |
| NIH      | Massachusetts                               |           2 |
| NIH      | Arizona                                     |           2 |
| NIH      | Georgia                                     |           2 |
| NIH      | Rhode Island                                |           2 |
| NIH      | Texas                                       |           2 |
| NIH      | New Hampshire                               |           2 |
| NIH      | North Carolina                              |           1 |
| NIH      | Wisconsin                                   |           1 |
| JHU      | King County                                 |          51 |
| JHU      | Unassigned Location (From Diamond Princess) |          45 |
| JHU      | Santa Clara                                 |          20 |
| JHU      | Westchester County                          |          18 |
| JHU      | Snohomish County                            |          18 |
| JHU      | Los Angeles                                 |          11 |
| JHU      | Cook County                                 |           5 |
| JHU      | New York City                               |           4 |
| JHU      | San Diego County                            |           3 |
| JHU      | Orange County                               |           3 |
| JHU      | Bergen County                               |           2 |
| JHU      | Harris County                               |           2 |
| JHU      | San Francisco County                        |           2 |
| JHU      | San Benito                                  |           2 |
| JHU      | Washington County                           |           2 |
| JHU      | Grafton County                              |           2 |
| JHU      | Sacramento County                           |           2 |
| JHU      | Fulton County                               |           2 |
| JHU      | Providence                                  |           2 |
| JHU      | Hillsborough                                |           2 |
| JHU      | Placer County                               |           2 |
| JHU      | San Mateo                                   |           2 |
| JHU      | Contra Costa County                         |           1 |
| JHU      | Williamson County                           |           1 |
| JHU      | Umatilla                                    |           1 |
| JHU      | Tempe                                       |           1 |
| JHU      | Boston                                      |           1 |
| JHU      | Madison                                     |           1 |
| JHU      | San Antonio                                 |           1 |
| JHU      | Humboldt County                             |           1 |
| JHU      | Sarasota                                    |           1 |
| JHU      | Santa Rosa County                           |           1 |
| JHU      | Sonoma County                               |           1 |
| JHU      | Norfolk County                              |           1 |
| JHU      | Berkeley                                    |           1 |
| JHU      | Maricopa County                             |           1 |
| JHU      | Wake County                                 |           1 |
| JHU      | Clark County                                |           1 |
| JHU      | Fort Bend County                            |           1 |
| JHU      | Grant County                                |           1 |
| JHU      | Queens County                               |           1 |
| JHU      | Lackland                                    |           0 |
| JHU      | Travis                                      |           0 |
| JHU      | Omaha                                       |           0 |
| BOP      | Washington                                  |          15 |
| BOP      | California                                  |          14 |
| BOP      | Massachusetts                               |           2 |
| BOP      | Oregon                                      |           2 |
| BOP      | Illinois                                    |           2 |
| BOP      | North Carolina                              |           1 |
| BOP      | New York                                    |           1 |
| BOP      | Texas                                       |           1 |
| BOP      | Arizona                                     |           1 |
| BOP      | Wisconsin                                   |           1 |

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