import {Block} from "../block/block";
import template from "./template";
import {blockProperty} from "../block/types";

export class Label extends Block {
  
  constructor(props: blockProperty) {
    super("div", props, template);
  }
}
