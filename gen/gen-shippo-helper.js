var fs = require('fs');

var FILE_NAME = "shippo-helpers.js";
var CODE = '';
var NAMESPACE = "endpoint.";

var urlsData = {};

var API_DESCRIPTOR = [
    {method: 'GET', URL: 'addresses/'},
    {method: 'GET', URL: 'addresses/:addressObjectId/validate/'},
    {method: 'GET', URL: 'addresses/:addressObjectId/'},
    {method: 'POST', URL: 'addresses/'},
    {method: 'POST', URL: 'parcels/'},
    {method: 'GET', URL: 'parcels/'},
    {method: 'GET', URL: 'parcels/:parcelObjectId/'},
    {method: 'POST', URL: 'shipments/'},
    {method: 'GET', URL: 'shipments/:shipmentObjectId/'},
    {method: 'GET', URL: 'shipments/'},
    {method: 'GET', URL: 'shipments/:shipmentObjectId/rates/:currencyCode/'},
    {method: 'GET', URL: 'rates/:rateObjectId/'},
    {method: 'POST', URL: 'transactions/'},
    {method: 'GET', URL: 'transactions/:transactionObjectId/'},
    {method: 'GET', URL: 'transactions/?results=:results'},
    {method: 'POST', URL: 'customs/items/'},
    {method: 'GET', URL: 'customs/items/:customsItemObjectId/'},
    {method: 'GET', URL: 'customs/items/'},
    {method: 'POST', URL: 'customs/declarations/'},
    {method: 'GET', URL: 'customs/declarations/'},
    {method: 'GET', URL: 'customs/declarations/:customsDecObjectId/'},
    {method: 'POST', URL: 'refunds/'},
    {method: 'GET', URL: 'refunds/:refoundObjectId'},
    {method: 'GET', URL: 'refunds/'},
    {method: 'POST', URL: 'manifests/'},
    {method: 'GET', URL: 'manifests/:manifestObjectId'},
    {method: 'GET', URL: 'manifests/'},
    {method: 'POST', URL: 'carrier_accounts/'},
    {method: 'GET', URL: 'carrier_accounts/:carrierAccountObjectId'},
    {method: 'GET', URL: 'carrier_accounts/'},
    {method: 'PUT', URL: 'carrier_accounts/:carrierAccountObjectId'},
    {method: 'GET', URL: 'tracks/:carrier/:trackingNumber/'},
    {method: 'POST', URL: 'tracks/'},
    {method: 'POST', URL: 'batches/'},
    {method: 'GET', URL: 'batches/:batchObjectId/'},
    {method: 'POST', URL: 'batches/:batchObjectId/add_shipments'},
    {method: 'POST', URL: 'batches/:batchObjectId/remove_shipments'},
    {method: 'POST', URL: 'batches/:batchObjectId/purchase'},
    {method: 'POST', URL: 'orders/'},
    {method: 'GET', URL: 'orders/:orderObjectId/'},
    {method: 'GET', URL: 'orders/'},
];

var convertUrls = function (url) {

    var convertedUrl = url;

    convertedUrl = convertedUrl.replace(/{/gi, ':');
    convertedUrl = convertedUrl.replace(/}/gi, '');

    return convertedUrl;
};

var camelCase = function (input) {
    return input.toLowerCase().replace(/_(.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
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

var makeEndpointsHelpers = function () {

        for (var i in API_DESCRIPTOR) {

            var objDes = API_DESCRIPTOR[i];

            var numVars = 0;
            var fnNames = [];
            var newPath = '';
            var url = convertUrls(objDes.URL);

            var tmpUrl = url.split("\?")[0];
            var urlParts = tmpUrl.split('/');
            for (var p in urlParts) {
                if (urlParts[p] != "" && urlParts[p] != "v1") {
                    if (urlParts[p].substr(0, 1) == ':') {
                        numVars++;
                        newPath += '/%s'
                    } else {
                        fnNames.push(urlParts[p]);
                        newPath += '/' + urlParts[p];
                    }
                }
            }

            var functionName = camelCase(fnNames.join('.'));
            functionName += "." + objDes.method.toLowerCase();
            if (!urlsData[functionName]) {
                urlsData[functionName] = {};
            }

            urlsData[functionName][numVars] = url;

        }

    var tmpObj = {};
    var tmpCode = '';
    var path = '';

    for (var i in urlsData) {

        path = '';
        var urlPart = i.split("\.");

        for (var j = 0; j < urlPart.length; j++) {

            path += (j == 0) ? urlPart[0] : '.' + urlPart[j];

            if (!tmpObj[path]) {
                tmpObj[path] = {};
                if (j < urlPart.length - 1) {
                    tmpCode += NAMESPACE + path + ' = {};\n';
                } else {

                    var method = urlPart[j];
                    var caller = method;
                    var transfromArguments = 'true';
                    if (method === 'get' || method === 'delete') {
                        caller += '(url)';
                        transfromArguments = 'true';
                    } else {
                        caller += '(url, params.argumentsObj)'
                        transfromArguments = 'false';
                    }

                    var fn = `function() {
\tvar obj = urlsData['${i}'];
\tvar params = analyzeParams(arguments);
\tvar url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, ${transfromArguments});
\treturn endpoint.${caller};
};`;

                    tmpCode += NAMESPACE + path + ' = ' + fn + '\n\n';
                }
            }
        }
    }

    CODE += tmpCode;

    var MESSAGE = '//////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//    This file is generated with shippo/gen/gen-shippo-helpers.js      //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//            ' + new Date() + '                   //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//////////////////////////////////////////////////////////////////////////\n';

    var HELPERS = 'var analyzeParams = ' + analyzeParams.toString() + ';\n\n';
    HELPERS += 'var getUrl = ' + getUrl.toString() + ';\n\n';
    CODE = MESSAGE + '\n\nvar urlsData = ' + JSON.stringify(urlsData, null, "\t") + ';\n\n' + HELPERS + '' + CODE;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});
