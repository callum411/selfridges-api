const request = require("request"), cheerio = require("cheerio");

var Functions = {
    GetProductDetails: function(url, stock, callback) {
        let RequestOptions = {
            url: url,
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36"
            }
        };
    
        request(RequestOptions, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                let x = cheerio.load(response.body);

                let ProductObj = {
                    ProductID: x("input[name='productId']").attr("value"),
                    WCId: x("input[name='wcid']").attr("value"),
                    StoreID: x("input[name='storeId']").attr("value"),
                    CatalogID: x("input[name='catalogId']").attr("value"),
                    ChildItemID: x("input[name='childItemId']").attr("value"),
                    ProductTitle: x("input[name='productTitle']").attr("value"),
                    ProductBrand: x("input[name='productBrand']").attr("value"),
                    ProductDesc: x("#main > div.itemScopeMain > div.infoBlock > ul.infoBlockTabContent > li.sel > div > div > div > p.hiddenDescription").html().replace(/\n|\r\n|\r|\t/g, ""),
                    Image: x("meta[property='og:image']").attr("content")
                };

                if (stock == false) {
                    callback(ProductObj);
                } else {
                    var ConstructedURL = `http://www.selfridges.com/webapp/wcs/stores/servlet/AjaxStockStatusView?productId=${ProductObj.ProductID}&quantityLimit=&wcid=${ProductObj.WCId}&storeId=${ProductObj.StoreID}&langId=-1&orderId=.&catalogId=${ProductObj.CatalogID}&catEntryId=&childItemId=${ProductObj.ChildItemID}&calculationUsageId=-1&shouldCachePage=false&check=**&defaultViewName=OrderItemDisplay&errorViewName=ProductDisplayErrorView&categoryId=&productTitle=${ProductObj.ProductTitle}&productBrand=${ProductObj.ProductBrand}&quantity=1`;
                    Functions.GetStockDetails(url, ConstructedURL, callback);
                } 
            } else {
                callback(null);
            }
        })
    },
    GetStockDetails: function(url, constructed_url, callback) {
        let RequestOptions = {
            url: constructed_url,
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36"
            }
        };

        request(RequestOptions, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                let x = JSON.parse(response.body);

                callback(x);
            } else {
                callback(null);
            }
        })
    }
};

module.exports = Functions;
