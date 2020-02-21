# Spain
## NSSAC COVID-19 Summary
## 02/20/2020



### Situation Report:
#### Fig 1:
![Spain cases](../merged_histories/Spain_merged_histories.png)

[Merged data csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Spain_merged_daily.csv)

#### Table 1: Situation summary


|                           | NIHFogarty       | JHU                         | BOP              | Tencent                       |
|---------------------------|------------------|-----------------------------|------------------|-------------------------------|
| First update logged       | 01/13/20         | 01/22/20                    | 01/12/20         | 02/04/20                      |
| Last update logged        | 02/20/20         | 02/19/20                    | 02/06/20         | 02/20/20                      |
| Method                    | Public line list | Cases by day & country list | Public line list | Daily cases in country scrape |
| First known case          | 01/31/20         | 01/22/20                    | 02/01/20         | 02/06/20                      |
| Total confirmed cases     | 2                | 2                           | 1                | 0                             |
| New cases since yesterday |                  |                             |                  | 0                             |
| Total suspected           |                  |                             |                  | 0                             |
| Total hospitalized        | 1                |                             | 0                |                               |
| Total recovered           |                  | 2                           | 0                | 0                             |
| Total deaths              | 0                | 0                           | 0                | 0                             |

Data sources: BOP, JHU, NIH-Fogarty, Tencent


[Sitrep csv](https://github.com/SchlittDataSci/SchlittDataSci.github.io/blob/master/data/tables/Spain_sitrep.csv)

### Geographic dispersal:
#### Fig 2:
![Spain mapped](../case_locs/Spain_case_locs.png)

#### Table 2: Confirmed cases by location


| source   | loc_name              |   confirmed |
|----------|-----------------------|-------------|
| Tencent  | Spain                 |           2 |
| NIH      | Canary Islands, Spain |           1 |
| NIH      | Mallorca, Spain       |           1 |
| JHU      | Spain                 |           2 |
| BOP      | Canary Islands, Spain |           1 |

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
* **[Natural Earth](https://www.naturalearthdata.com/forums/forum/natural-earth-map-data/cultural-vectors/admin-1-states-provinces-and-their-boundaries/)

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-158816269-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-158816269-1');
</script>