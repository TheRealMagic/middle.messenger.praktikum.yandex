import {Router} from "./Router";
import {assert} from "chai";
import {BaseController} from "../../controllers/BaseController";
import {Route} from "./Route";

describe("Router tests", () => {
  
  it( "use should add route", () => {
    const router = new Router("body");
    router.use("/test", BaseController);
    assert.lengthOf(router.routes, 1, "one route");
    router.use("/test2", BaseController);
    assert.lengthOf(router.routes, 2, "two routes");
  });
  
  it( "use should return router", () => {
    const router = new Router("body");
    const test = router.use("/test", BaseController);
    assert.instanceOf(test, Router, "use returns router");
  });
  
  it( "getRoute should return route if exists", () => {
    const router = new Router("body");
    router.use("/exists", BaseController);
    const existingRoute = router.getRoute("/exists");
    assert.instanceOf(existingRoute, Route);
    const notExistingRoute = router.getRoute("/notexists");
    assert.isUndefined(notExistingRoute);
  });
  
});
