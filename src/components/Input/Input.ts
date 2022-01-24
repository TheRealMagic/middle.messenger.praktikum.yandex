import {Block} from "../block/block";
import {inputProperty} from "./types";


export class TextInput extends Block {
  
  private _createLabel (labelConfig: inputProperty = {}): Block {
    labelConfig.textContent = labelConfig.textContent || this.props.placeholder || "";
    return new Block("div", labelConfig);
  }
  
  private _createInputField (inputConfig: inputProperty = {}): Block {
    return new Block("input", inputConfig);
  }
  
  private _createValidateField (validateFieldConfig: inputProperty = {}): Block {
    return new Block("div", validateFieldConfig);
  }
  
  render(): HTMLElement {
    const tempInput: Block = this._createInputField(this.props);
    if (!this._meta.extendedConfig || !this._meta.extendedConfig.containerConfig) {
      return tempInput.getContent();
    }
    let items: Block[] = [];
    if (this._meta.extendedConfig.labelConfig) {
      const label: Block = this._createLabel(this._meta.extendedConfig.labelConfig);
      this.changeLabelVisible(label, !!this.props.value);
      items.push(label);
    }
    items.push(tempInput);
    if (this._meta.extendedConfig.validateConfig) {
      const validateField: Block = this._createValidateField(this._meta.extendedConfig.validateConfig);
      this.changeLabelVisible(validateField, !!this.props.value);
      items.push(validateField);
    }
    this._meta.extendedConfig.containerConfig.items = items;
    const container = new Block("div", this._meta.extendedConfig.containerConfig);
    
    return container.render();
  }
  
  changeLabelVisible(label: Block, show: boolean) {
    show ? label.show() : label.hide();
  }
}
