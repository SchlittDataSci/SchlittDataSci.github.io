# Spain
## NSSAC COVID-19 Summary
## 02/29/2020



### Situation Report:
#### Fig 1:
![Spain cases](../merged_histories/Spain_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Spain_merged_daily.csv)

#### Table 1: Situation summary


|                           | NIHFogarty       | JHU                         | BOP              | Tencent                       |
|---------------------------|------------------|-----------------------------|------------------|-------------------------------|
| First update logged       | 01/13/20         | 01/22/20                    | 01/12/20         | 02/11/20                      |
| Last update logged        | 02/28/20         | 02/28/20                    | 02/29/20         | 02/29/20                      |
| Method                    | Public line list | Cases by day & country list | Public line list | Daily cases in country scrape |
| First known case          | 01/31/20         | 01/22/20                    | 01/31/20         | 02/11/20                      |
| Total confirmed cases     | 34               | 32                          | 13               | 13                            |
| New cases since yesterday |                  |                             |                  | 0                             |
| Total suspected           |                  |                             |                  | 0                             |
| Total hospitalized        | 4                |                             | 1                |                               |
| Total recovered           |                  | 2                           | 0                | 2                             |
| Total deaths              | 0                | 0                           | 0                | 0                             |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Spain_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Spain mapped](../case_locs/Spain_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name                   |   confirmed |
|----------|----------------------------|-------------|
| NIH      | Andalusia, Spain           |           8 |
| NIH      | Valencia, Spain            |           7 |
| NIH      | Tenerife, Spain            |           5 |
| NIH      | Madrid, Spain              |           5 |
| NIH      | Barcelona, Spain           |           3 |
| NIH      | Castile and Leon, Spain    |           2 |
| NIH      | Zaragoza, Spain            |           1 |
| NIH      | Mallorca, Spain            |           1 |
| NIH      | Canary Islands, Spain      |           1 |
| NIH      | Castellon, Spain           |           1 |
| JHU      | Spain                      |          32 |
| BOP      | Canary Islands, Spain      |           4 |
| BOP      | Castilla y Leon, Spain     |           2 |
| BOP      | Andalusia, Spain           |           1 |
| BOP      | Valencian Community, Spain |           1 |
| BOP      | Catalonia, Spain           |           1 |
| BOP      | Baleares, Spain            |           1 |

Data sources: BOP, JHU, Natural Earth, NIH-Fogarty, Tencent


[Case points geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Spain_case_locs.geojson)

[Case admin1 locs geojson](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/shapes/Spain_admin1_locs.geojson)

### Observed case clusters:
#### Fig 3:
![Spain cases](../cluster_analysis/Spain_imported_cases_NIHFogarty.png)



Data source: NIH-Fogarty


#### Fig 4:
![Spain cases](../cluster_analysis/Spain_imported_cases_BOP.png)



Data source: BOP


#### Fig 5:
![Spain network](../autochthonous_networks/Spain_network.png)



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