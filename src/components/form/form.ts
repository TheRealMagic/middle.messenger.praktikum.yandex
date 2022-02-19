import {Block} from "../block/block";
import {blockProperty} from "../block/types";
import {Input} from "../Input/input";
import {ContaineredInput} from "../containeredInput/containeredInput";


export class Form extends Block {
  
  constructor(props: blockProperty, template?: string) {
    super("form", props, template);
  }
  
  validate(): boolean {
    const forValidate = Object.values(this.props).filter((item: any) => item instanceof Input
      || item instanceof ContaineredInput);
    let isNotValid: boolean = false;
    for (let i = 0; i < forValidate.length; i++) {
      isNotValid = !!forValidate[i].validate() || isNotValid;
    }
    return isNotValid;
  }
  
}

export function getDefaultTextInputClasses() {
  return [
    "base-input",
    "base-input-text",
    "sign-text-input"
  ];
}
