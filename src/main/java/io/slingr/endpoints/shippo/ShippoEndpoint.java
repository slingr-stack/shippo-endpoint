package io.slingr.endpoints.shippo;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import org.apache.log4j.Logger;

@SlingrEndpoint(name = "shippo", functionPrefix = "_")
public class ShippoEndpoint extends HttpEndpoint {

    private static final Logger logger = Logger.getLogger(ShippoEndpoint.class);


    @Override
    public String getApiUri() {
        return null;
    }


}
