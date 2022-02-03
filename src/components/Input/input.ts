import {Block} from "../block/block";
import {blockProperty} from "../block/types";
import template from "./template";

export class Input extends Block {
  
  focused: boolean;
  
  constructor(props: blockProperty) {
    super("input", props, template);
  }
  
  validate(): string {
    if (!this.props.validator) {
      return "";
    } else {
      this.props.validator.field = this.getContent() as HTMLInputElement;
      return this.props.validator.checkValid();
    }
  }
}
