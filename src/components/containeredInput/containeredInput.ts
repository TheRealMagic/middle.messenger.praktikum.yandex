import {blockProperty} from "../block/types";
import {Block} from "../block/block";
import template from "./template";
import {Label} from "../label/label";
import {Input} from "../Input/input";
import {Templator} from "../../utils/Templator/Templator";


export class ContaineredInput extends Block {
  
  fieldNameLabel: Label;
  
  inputField: Input;
  
  validationLabel: Label;
  
  alwaysShowlabel: boolean;
  
  constructor(props: blockProperty) {
    const fieldNameLabel = new Label({classes: props.labelClasses || [], textContent: props.placeholder || "Поле"});
    if (!props.alwaysShowlabel) {
      fieldNameLabel.hide();
    }
    const inputField = new Input(props);
    const validationLabel = new Label({classes: ["base-label", "warning-label"], textContent: ""});
    validationLabel.hide();
    
    super("div", {classes: ["input-container", ...(props.containerClasses || [])], fieldNameLabel, inputField, validationLabel}
      , template);
  
    this.alwaysShowlabel = props.alwaysShowlabel;
    this.fieldNameLabel = fieldNameLabel;
    this.inputField = inputField;
    this.validationLabel = validationLabel;
  }
  
  componentDidUpdate(oldValue?: string, newValue?: string): boolean {
    if (this.inputField) {
      this.inputField.setProps({value: this.props!.value});
    }
    return oldValue !== newValue;
  }
  
  render(): HTMLElement {
    const templator: Templator = new Templator(template);
    const newElement = templator.compile(this.props);
    this.checkHideLabel();
    return newElement;
  }
  
  checkHideLabel() {
    if (!this.alwaysShowlabel && this.props.focused) {
      this.props.value ? this.fieldNameLabel.show() : this.fieldNameLabel.hide();
    }
  }
  
  addListeners(): void {
    if (this.input) {
      this.input.addListeners();
    }
  }
  
  removeListeners(): void {
    if (this.input) {
      this.input.removeListeners();
    }
  }
  
  get input(): Input {
    return this.inputField;
  }
  
}