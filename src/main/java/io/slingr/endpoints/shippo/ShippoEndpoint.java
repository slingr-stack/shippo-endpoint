package io.slingr.endpoints.shippo;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.EndpointFunction;
import io.slingr.endpoints.framework.annotations.EndpointProperty;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import org.apache.log4j.Logger;

/**
 * <p>Shippo endpoint
 * <p>
 * <p>Created by hpacini on 10/10/19.
 */
@SlingrEndpoint(name = "shippo", functionPrefix = "_")
public class ShippoEndpoint extends HttpEndpoint {

    private final String API_URL = "https://api.goshippo.com";

    private static final Logger logger = Logger.getLogger(ShippoEndpoint.class);

    @EndpointProperty
    private String apiToken;

    @Override
    public String getApiUri() {
        return API_URL;
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        logger.debug(String.format("GET [%s]", request.getJsonParams().string("path")));
        setRequestConfig(request, false);
        try {
            return defaultGetRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) {
        logger.debug(String.format("PUT [%s]", request.getJsonParams().string("path")));
        setRequestConfig(request, true);
        try {
            return defaultPutRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointFunction(name = "_patch")
    public Json patch(FunctionRequest request) {
        logger.debug(String.format("PATCH [%s]", request.getJsonParams().string("path")));
        setRequestConfig(request, true);
        try {
            return defaultPatchRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        logger.debug(String.format("POST [%s]", request.getJsonParams().string("path")));
        setRequestConfig(request, false);
        try {
            return defaultPostRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) {
        logger.info(String.format("DELETE [%s]", request.getJsonParams().string("path")));
        setRequestConfig(request, false);
        try {
            return defaultDeleteRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    private void setRequestConfig(FunctionRequest request, boolean formEncoded) {
        Json body = request.getJsonParams();
        Json headers = body.json("headers");
        if (headers == null) {
            headers = Json.map();
        }
        headers.set("Shippo-API-Version", "2018-02-08 ");
        headers.set("Authorization", "ShippoToken " + apiToken);
        if (formEncoded) {
            headers.set("Content-Type", "application/x-www-form-urlencoded");
        } else {
            headers.set("Content-Type", "application/json");
        }
        body.set("headers", headers);
    }

}
