# Problem Statement
- we have a dataset that has two genders (in the dataset)
- this is the api call: 'https://data.cityofnewyork.us/resource/25th-nujf.json?brth_yr=2021&$order=cnt DESC&$limit=10'
- here is the return from the api:

```json
[
  {
    "brth_yr": "2021",
    "gndr": "MALE",
    "ethcty": "HISPANIC",
    "nm": "Liam",
    "cnt": "446",
    "rnk": "1"
  },
  {
    "brth_yr": "2021",
    "gndr": "FEMALE",
    "ethcty": "HISPANIC",
    "nm": "Emma",
    "cnt": "410",
    "rnk": "2"
  }
]
```

# GOAL
- link from the /basic page to the /DataSketch page
- on the home page two links, to filter by gender
- fetch the data from the api call above  update the datasket page
