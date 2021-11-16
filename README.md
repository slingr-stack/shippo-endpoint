---
title: Shippo endpoint
keywords: 
last_updated: October 11, 2019
tags: []
summary: "Detailed description of the API of the Shippo endpoint."
---

## Overview

Shippo helps you focus on growing your business. Start by connecting your e-commerce platform to Shippo to automatically 
sync order information. Then, create all shipping labels and docs you may need for domestic and international orders.

What’s more, Shippo helps you customize the user experience, offering branded emails and tracking pages. 
Plus, we make it easy to create affordable return labels, print in batch, and do so much more. 

The Shippo endpoint has the following features:

- Interact with Shippo API
- Shortcuts to access the REST API
- Support for webhooks

In most cases you will be using the provided shortcuts to access the API. For example, you could use the REST API
directly by doing an HTTP request like this:

```js
var res = app.endpoints.shippo.get('addresses/801ac8895996465b871eddbdf17d47f2/validate/');
```

However you probably want to use the shortcuts:

```js
var res = app.endpoints.shippo.addresses.validate.get('801ac8895996465b871eddbdf17d47f2');
```

These shortcuts are based on the [Shippo REST API](https://goshippo.com/docs/reference).
You can see more information about that in the [shortcuts section](#shortcuts).

## Configuration

First you will need to setup an account in Shippo. Then you will be able to configure the endpoint you will
need to generate an API key. You can find more information about that [here](https://goshippo.com/docs/auth/).

### API key

The private key can be generated in the dashboard of your Shippo app. Just copy the generated API secret to this field.


### Webhook URL

This is the URL you should configure for webhooks in Shippo dashboard. 

## Javascript API

The Javascript API of the Shippo endpoint has three pieces:

- **HTTP request**: this allows to make regular HTTP requests like `GET`, `POST` or `PUT` to the API.
- **Shortcuts**: these are helpers to make HTTP request to the API in a more convenient way.

### HTTP requests

You can make `GET`, `POST`, `PUT`, and `DELETE` request to the 
[Shippo API](https://goshippo.com/docs/reference) like this:

```js
var res = app.endpoints.shippo.get('addresses/801ac8895996465b871eddbdf17d47f2/validate/');

var res = app.endpoints.shippo.addresses.validate.get('801ac8895996465b871eddbdf17d47f2');
```

Please take a look at the documentation of the [HTTP endpoint]({{site.baseurl}}/endpoints_http.html#javascript-api)
for more information.

### Shortcuts

Instead of having to use the generic HTTP methods, you can make use of the shortcuts provided in the endpoint. These
shortcuts follow these rules:

- **Path sections get converted to namespaces**: for example if the method is GET `~/addresses/801ac8895996465b871eddbdf17d47f2/validate/` in section Core Resources 
  it is converted to `app.endpoints.shippo.addresses.validate.get(...)`. 
- **If they have dashes, we should convert them to camel case**: GET `~/carrier_accounts/` is converted to 
  `app.endpoints.shippo.carrierAccounts.get()`. 
- **HTTP method is appended at the end of the method**: for example if the method is `GET`, you will see a method with 
  the suffix `.get(...)`.  
  This is the mapping of names:
  - `GET`: `get`
  - `POST`: `create`
  - `PUT`: `update`
  - `PATCH`: `update`
  - `DELETE`: `delete`
- **Path variables become method parameters**: if the method has variables in the path, they will become parameters for 
  the method. For example `GET ~/addresses/801ac8895996465b871eddbdf17d47f2/validate/` will become 
  `app.endpoints.shippo.addresses.validate.get("234")` where :id is 123.
- **Additional parameters or body are sent in the last param as JSON**: if the method accepts more parameters or it 
  allows to send a body, that will be sent in the last parameter. For example the method `POST ~/carrier_accounts/:id/`, 
  so it will become `app.endpoints.shippo.carrierAccounts.put("123", {...})`.
- **Parameters are send as object**: in order to send parameters in URL you send as object parameter. For example the 
  method `~/batches/:batchObjectId?page=2&object_results=creation_failed` so it will become 
  `app.endpoints.shippo.batch.get(123, {page: 2, object_results: 'creation_failed'});`
  
Here are some URLs of the REST API and their corresponding shortcut:

```js
var res = app.endpoints.shippo.addresses.validate.get('801ac8895996465b871eddbdf17d47f2');
log(JSON.stringify(res));

var res = app.endpoints.shippo.addresses.post({
    "object_purpose": "PURCHASE",
    "name": "Mr Hippo",
    "street1": "965 Mission St #572",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94155",
    "country": "US",
    "phone": "4151234567",
    "email": "mrhippo2@goshippo.com"
});
log(JSON.stringify(res));
```

Following is a list of available helpers:

    - endpoint.addresses.get = function() { ... }
    - endpoint.addresses.validate.get = function() { ... }
    - endpoint.addresses.post = function() { ... }
    - endpoint.parcels.post = function() { ... }
    - endpoint.parcels.get = function() { ... }
    - endpoint.shipments.post = function() { ... }
    - endpoint.shipments.get = function() { ... }
    - endpoint.shipments.rates.get = function() { ... }
    - endpoint.rates.get = function() { ... }
    - endpoint.transactions.post = function() { ... }
    - endpoint.transactions.get = function() { ... }
    - endpoint.customs.items.post = function() { ... }
    - endpoint.customs.items.get = function() { ... }
    - endpoint.customs.declarations.post = function() { ... }
    - endpoint.customs.declarations.get = function() { ... }
    - endpoint.refunds.post = function() { ... }
    - endpoint.refunds.get = function() { ... }
    - endpoint.manifests.post = function() { ... }
    - endpoint.manifests.get = function() { ... }
    - endpoint.carrierAccounts.post = function() { ... }
    - endpoint.carrierAccounts.get = function() { ... }
    - endpoint.carrierAccounts.put = function() { ... }
    - endpoint.tracks.get = function() { ... }
    - endpoint.tracks.post = function() { ... }
    - endpoint.batches.post = function() { ... }
    - endpoint.batches.get = function() { ... }
    - endpoint.batches.addShipments.post = function() { ... }
    - endpoint.batches.removeShipments.post = function() { ... }
    - endpoint.batches.purchase = {}; ... }
    - endpoint.batches.purchase.post = function() { ... }
    - endpoint.orders.post = function() { ... }
    - endpoint.orders.get = function() { ... }

## Events

### Webhook

Shippo's webhooks allow your application to receive information to configured events occur.

Please refer to the [webhooks documentation](https://goshippo.com/docs/webhooks/) for more information on how to configure them.

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.

