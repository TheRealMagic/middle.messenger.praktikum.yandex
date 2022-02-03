import {blockProperty} from "../block/types";
import {Block} from "../block/block";
import template from "./template";
import {Label} from "../label/label";
import {Input} from "../Input/input";
import {Templator} from "../../utils/Templator/Templator";

import "./style.scss";


export class ContaineredInput extends Block {
  
  fieldNameLabel: Label;
  
  inputField: Input;
  
  validationLabel: Label;
  
  alwaysShowlabel: boolean;
  
  neverShowlabel: boolean;
  
  constructor(props: blockProperty) {
    const fieldNameLabel = new Label({classes: props.labelClasses || [], textContent: props.placeholder || "Поле"});
    if (!props.alwaysShowlabel) {
      fieldNameLabel.hide();
    }
    const inputField = new Input(props);
    const validationLabel = new Label({classes: ["base-label", "warning-label", ...props.warningLabelClasses || []], textContent: ""});
    validationLabel.hide();
    
    super("div", {
      classes: [
        "input-container",
        ...(props.containerClasses || [])
      ],
      fieldNameLabel,
      inputField,
      validationLabel
    }, template);
    this.alwaysShowlabel = props.alwaysShowlabel;
    this.neverShowlabel = props.neverShowlabel;
    this.fieldNameLabel = fieldNameLabel;
    const newListeners = Object.assign(props.listeners || {},
      {
        focus: (): void => {
          inputField.focused = true;
          this.checkHideLabel();
          this.validate();
        },
        blur: (e: Event): void => {
          inputField.setProps({value: (e.target as HTMLInputElement).value});
          inputField.focused = false;
          this.checkHideLabel();
          this.validate();
        }
      });
    inputField.setProps({listeners: newListeners});
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
    if (!this.alwaysShowlabel && !this.neverShowlabel && this.fieldNameLabel) {
      this.input.props.value || this.input.focused ? this.fieldNameLabel.show() : this.fieldNameLabel.hide();
    }
  }
  
  validate(): string {
    const warningMessage: string = this.input.validate();
    if (warningMessage) {
      this.validationLabel.setProps({textContent: warningMessage});
      this.validationLabel.show();
    } else {
      this.validationLabel.setProps({textContent: ""});
      this.validationLabel.hide();
    }
    return warningMessage;
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
