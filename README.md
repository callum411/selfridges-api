# Selfridges API
An unofficial NodeJS API for http://www.selfridges.com

# Installation
`npm install selfridges-api`

# Usage
```js
const selfridges = require("selfridges-api");

selfridges.GetProductDetails(url, stock, (data) => {
  //console.log(data);
});
```

Name | Type | Description | Example
------------ | ------------- | ------------- | -------------
url | string | URL of the product you are fetching data from | https://www.endclothing.com/gb/off-white-long-sleeve-diagonal-camo-tee-omab001s188780129901.html
stock | boolean | true/false depending on if you want to return stock data | true
data | object | retrieved data | N/A
