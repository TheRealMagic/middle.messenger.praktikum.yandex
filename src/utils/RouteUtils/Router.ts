import {Route} from "./Route";
import {Constructable} from "./types";
import get from "../get";
import ApplicationStore from "../../modules/ApplicationState/ApplicationStore";

export class Router {
  
  static __instance: Router;
  
  routes: Route[];
  
  history: History;
  
  _currentRoute: Route | null;
  
  _rootQuery: string;
  
  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }
    
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    
    Router.__instance = this;
  }
  
  use(pathname: string, block: Constructable) {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});
    this.routes.push(route);
    return this;
  }
  
  start() {
    window.addEventListener("popstate", (e: PopStateEvent) => {
      this._onRoute((e.currentTarget as Window).location.pathname);
    });
    let user = get(ApplicationStore.getState(), "user");
    const path = window.location.pathname;
    if (user && (path === "/" || path === "/sign-up")) {
      this.go("/messenger");
    } else {
      this._onRoute(window.location.pathname);
    }
  }
  
  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    this._currentRoute = route!;
    if (!route) {
      this.go("/404");
    } else {
      route.render();
    }
  }
  
  go(pathname:string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }
  
  back() {
    this.history.back();
  }
  
  forward() {
    this.history.forward();
  }
  
  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}