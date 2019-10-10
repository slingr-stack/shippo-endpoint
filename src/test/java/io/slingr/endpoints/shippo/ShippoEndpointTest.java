package io.slingr.endpoints.shippo;

import io.slingr.endpoints.shippo.ShippoEndpoint;
import io.slingr.endpoints.utils.tests.EndpointTests;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

@Ignore("For dev purposes only")
public class ShippoEndpointTest {

    private static EndpointTests test;
    private static ShippoEndpoint endpoint;

    @BeforeClass
    public static void init() throws Exception {
        test = EndpointTests.start(new io.slingr.endpoints.shippo.Runner(), "test.properties");
        endpoint = (ShippoEndpoint) test.getEndpoint();
    }


    @Test
    public void testRequest() {

    }

}
