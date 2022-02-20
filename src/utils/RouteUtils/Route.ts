import {blockProperty} from "../../components/block/types";
import {render} from "../render";
import {Constructable} from "./types";
import {BaseController} from "../../controllers/BaseController";

export class Route {
  
  _pathname: string;
  
  _controllerClass: Constructable;
  
  _controller: BaseController | null;
  
  _props: blockProperty;
  
  constructor(pathname: string, view: Constructable, props: blockProperty) {
    this._pathname = pathname;
    this._controllerClass = view;
    this._controller = null;
    this._props = props;
  }
  
  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.render();
    }
  }
  
  leave() {
    if (this._controller) {
      this._controller.hideView();
    }
  }
  
  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }
  
  render() {
    if (!this._controller) {
      this._controller = new this._controllerClass(this._props);
    }
    render(this._props.rootQuery, this._controller.view!);
  }
}

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}