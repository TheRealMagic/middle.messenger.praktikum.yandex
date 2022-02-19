import {Block} from "../../components/block/block";
import {blockProperty} from "../../components/block/types";
import {render} from "../render";
import {Constructable} from "./types";

export class Route {
  
  _pathname: string;
  
  _blockClass: Constructable;
  
  _block: Block | null;
  
  _props: blockProperty;
  
  constructor(pathname: string, view: Constructable, props: blockProperty) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }
  
  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.render();
    }
  }
  
  leave() {
    if (this._block) {
      this._block.hide();
    }
  }
  
  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }
  
  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
      render(this._props.rootQuery, this._block!);
    } else {
      this._block.show();
    }
  }
}

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}