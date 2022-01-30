import {Block} from "../block/block";
import {blockProperty} from "../block/types";
import containerTemplate  from "./template";

export class Container extends Block {
  
  constructor(props: blockProperty, template?: string) {
    super("div", props, template || containerTemplate);
  }
}
