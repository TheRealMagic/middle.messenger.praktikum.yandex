import {Block} from "../block/block";
import {blockProperty} from "../block/types";
import template from "./template";

export class Input extends Block {
  
  constructor(props: blockProperty) {
    super("input", props, template);
  }
}
