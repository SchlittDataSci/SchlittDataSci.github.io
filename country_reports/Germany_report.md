# Germany
## NSSAC COVID-19 Summary
## 02/27/2020



### Situation Report:
#### Fig 1:
![Germany cases](../merged_histories/Germany_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Germany_merged_daily.csv)

#### Table 1: Situation summary


|                           | Tencent                       | JHU                         | NIHFogarty       | BOP              |
|---------------------------|-------------------------------|-----------------------------|------------------|------------------|
| First update logged       | 02/04/20                      | 01/22/20                    | 01/13/20         | 01/12/20         |
| Last update logged        | 02/27/20                      | 02/26/20                    | 02/27/20         | 02/26/20         |
| Method                    | Daily cases in country scrape | Cases by day & country list | Public line list | Public line list |
| First known case          | 02/04/20                      | 01/22/20                    | 01/28/20         | 01/27/20         |
| Total confirmed cases     | 45                            | 27                          | 26               | 19               |
| New cases since yesterday | 26                            |                             | 1                |                  |
| Total suspected           | 0                             |                             |                  |                  |
| Total hospitalized        |                               |                             | 3                | 0                |
| Total recovered           | 14                            | 15                          |                  | 1                |
| Total deaths              | 0                             | 0                           | 0                | 0                |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Germany_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Germany mapped](../case_locs/Germany_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                        |   confirmed |
|----------|---------------------------------|-------------|
| NIH      | Bavaria, Germany                |          14 |
| NIH      | North Rhine-Westphalia, Germany |           6 |
| NIH      | Tubingen, Germany               |           2 |
| NIH      | Frankfurt, Germany              |           2 |
| NIH      | Baden-Wuerttemberg, Germany     |           2 |
| JHU      | Germany                         |          27 |
| BOP      | Bavaria, Germany                |          13 |
| BOP      | Rhineland-Palatinate, Germany   |           2 |
| BOP      | North Rhine-Westphalia, Germany |           2 |
| BOP      | Baden Wuettermberg, Germany     |           1 |

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


#### Fig 5:
![Germany network](../autochthonous_networks/Germany_network.png)



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