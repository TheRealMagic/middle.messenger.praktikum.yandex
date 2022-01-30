import {Block} from "../block/block";
import {blockProperty} from "../block/types";


export class Form extends Block {
  
  constructor(props: blockProperty, template?: string) {
    super("form", props, template);
  }
  
}

export function getDefaultTextInputClasses() {
  return [
    "base-input",
    "base-input-text",
    "sign-text-input"
  ];
}
