# Selfridges API
An unofficial NodeJS API for http://www.selfridges.com

### Installation
1. Download [selfridges.js](selfridges.js)
2. Copy the file to your node directory
3. `const selfridges = require("./selfridges.js");`

### Usage
```js
const selfridges = require("selfridges-api");

selfridges.GetProductDetails(url, stock, (data) => {
  //console.log(data);
});
```

### Params
Name | Type | Description | Example
------------ | ------------- | ------------- | -------------
url | string | url of the product you are fetching data from | http://www.selfridges.com/GB/en/cat/off-white-c-o-virgil-abloh-camo-print-cotton-jersey-top_436-3003613-OMAB001S18878012
stock | boolean | true/false depending on if you want to return stock data | true
data | object | retrieved data | N/A

### License
selfridges-api is licensed under [MIT License](https://github.com/cxllum-xyz/selfridges-api/blob/master/LICENSE).
