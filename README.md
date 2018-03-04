# Selfridges API
An unofficial NodeJS API for http://www.selfridges.com

# Installation
`npm install selfridges-api`

# Usage
```
const selfridges = require("selfridges-api");

selfridges.GetProductDetails(url, stock, (data) => {
  //console.log(data);
});
```

# Params
```
url (string): URL of the product you are fetching data from
stock (boolean): true/false depending on if you want to return stock data
data (object): retrieved data
```
