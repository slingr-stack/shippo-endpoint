//////////////////////////////////////////////////////////////////////////
//                                                                      //
//    This file is generated with shippo/gen/gen-shippo-helpers.js      //
//                                                                      //
//            Fri Oct 11 2019 10:33:09 GMT-0300 (-03)                   //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


var urlsData = {
	"addresses.get": {
		"0": "addresses/",
		"1": "addresses/:addressObjectId/"
	},
	"addresses.validate.get": {
		"1": "addresses/:addressObjectId/validate/"
	},
	"addresses.post": {
		"0": "addresses/"
	},
	"parcels.post": {
		"0": "parcels/"
	},
	"parcels.get": {
		"0": "parcels/",
		"1": "parcels/:parcelObjectId/"
	},
	"shipments.post": {
		"0": "shipments/"
	},
	"shipments.get": {
		"0": "shipments/",
		"1": "shipments/:shipmentObjectId/"
	},
	"shipments.rates.get": {
		"2": "shipments/:shipmentObjectId/rates/:currencyCode/"
	},
	"rates.get": {
		"1": "rates/:rateObjectId/"
	},
	"transactions.post": {
		"0": "transactions/"
	},
	"transactions.get": {
		"0": "transactions/?results=:results",
		"1": "transactions/:transactionObjectId/"
	},
	"customs.items.post": {
		"0": "customs/items/"
	},
	"customs.items.get": {
		"0": "customs/items/",
		"1": "customs/items/:customsItemObjectId/"
	},
	"customs.declarations.post": {
		"0": "customs/declarations/"
	},
	"customs.declarations.get": {
		"0": "customs/declarations/",
		"1": "customs/declarations/:customsDecObjectId/"
	},
	"refunds.post": {
		"0": "refunds/"
	},
	"refunds.get": {
		"0": "refunds/",
		"1": "refunds/:refoundObjectId"
	},
	"manifests.post": {
		"0": "manifests/"
	},
	"manifests.get": {
		"0": "manifests/",
		"1": "manifests/:manifestObjectId"
	},
	"carrierAccounts.post": {
		"0": "carrier_accounts/"
	},
	"carrierAccounts.get": {
		"0": "carrier_accounts/",
		"1": "carrier_accounts/:carrierAccountObjectId"
	},
	"carrierAccounts.put": {
		"1": "carrier_accounts/:carrierAccountObjectId"
	},
	"tracks.get": {
		"2": "tracks/:carrier/:trackingNumber/"
	},
	"tracks.post": {
		"0": "tracks/"
	},
	"batches.post": {
		"0": "batches/"
	},
	"batches.get": {
		"1": "batches/:batchObjectId/"
	},
	"batches.addShipments.post": {
		"1": "batches/:batchObjectId/add_shipments"
	},
	"batches.removeShipments.post": {
		"1": "batches/:batchObjectId/remove_shipments"
	},
	"batches.purchase.post": {
		"1": "batches/:batchObjectId/purchase"
	},
	"orders.post": {
		"0": "orders/"
	},
	"orders.get": {
		"0": "orders/",
		"1": "orders/:orderObjectId/"
	}
};

var analyzeParams = function (args) {
    var paramsSize = 0;
    var params = [];
    var argumentsObj = null;
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] != 'object') {
            paramsSize++;
            params.push(args[i]);
        } else {
            argumentsObj = args[i];
        }

    }
    return {
        paramsSize: paramsSize,
        argumentsObj: argumentsObj,
        params: params
    };
};

var getUrl = function (url, params, args, argsToPath) {

    if (!url) {
        return null;
    }

    if (params.length > 0) {
        var i = 0;
        url = url.replace(/:(\w+)/g, function () {
            return params[i++];
        });
    }

    if (args && argsToPath) {
        var tmp = Object.keys(args).map(function (k) {
            return encodeURIComponent(k) + '=' + args[k];
        }).join('&');

        if (url.split("\?").length > 1) {
            url += '&' + tmp;
        } else {
            url += '?' + tmp;
        }
    }

    return url;
};

endpoint.addresses = {};
endpoint.addresses.get = function() {
	var obj = urlsData['addresses.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.addresses.validate = {};
endpoint.addresses.validate.get = function() {
	var obj = urlsData['addresses.validate.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.addresses.post = function() {
	var obj = urlsData['addresses.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.parcels = {};
endpoint.parcels.post = function() {
	var obj = urlsData['parcels.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.parcels.get = function() {
	var obj = urlsData['parcels.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.shipments = {};
endpoint.shipments.post = function() {
	var obj = urlsData['shipments.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.shipments.get = function() {
	var obj = urlsData['shipments.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.shipments.rates = {};
endpoint.shipments.rates.get = function() {
	var obj = urlsData['shipments.rates.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.rates = {};
endpoint.rates.get = function() {
	var obj = urlsData['rates.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.transactions = {};
endpoint.transactions.post = function() {
	var obj = urlsData['transactions.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.transactions.get = function() {
	var obj = urlsData['transactions.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.customs = {};
endpoint.customs.items = {};
endpoint.customs.items.post = function() {
	var obj = urlsData['customs.items.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.customs.items.get = function() {
	var obj = urlsData['customs.items.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.customs.declarations = {};
endpoint.customs.declarations.post = function() {
	var obj = urlsData['customs.declarations.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.customs.declarations.get = function() {
	var obj = urlsData['customs.declarations.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.refunds = {};
endpoint.refunds.post = function() {
	var obj = urlsData['refunds.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.refunds.get = function() {
	var obj = urlsData['refunds.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.manifests = {};
endpoint.manifests.post = function() {
	var obj = urlsData['manifests.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.manifests.get = function() {
	var obj = urlsData['manifests.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.carrierAccounts = {};
endpoint.carrierAccounts.post = function() {
	var obj = urlsData['carrierAccounts.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.carrierAccounts.get = function() {
	var obj = urlsData['carrierAccounts.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.carrierAccounts.put = function() {
	var obj = urlsData['carrierAccounts.put'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.put(url, params.argumentsObj);
};

endpoint.tracks = {};
endpoint.tracks.get = function() {
	var obj = urlsData['tracks.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.tracks.post = function() {
	var obj = urlsData['tracks.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.batches = {};
endpoint.batches.post = function() {
	var obj = urlsData['batches.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.batches.get = function() {
	var obj = urlsData['batches.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

endpoint.batches.addShipments = {};
endpoint.batches.addShipments.post = function() {
	var obj = urlsData['batches.addShipments.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.batches.removeShipments = {};
endpoint.batches.removeShipments.post = function() {
	var obj = urlsData['batches.removeShipments.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.batches.purchase = {};
endpoint.batches.purchase.post = function() {
	var obj = urlsData['batches.purchase.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.orders = {};
endpoint.orders.post = function() {
	var obj = urlsData['orders.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.orders.get = function() {
	var obj = urlsData['orders.get'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
	return endpoint.get(url);
};

