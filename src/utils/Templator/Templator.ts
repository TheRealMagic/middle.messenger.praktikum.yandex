import {TemplatorConfig} from "./TemplatorTypes";
import {Block} from "../../components/block/block";

export default class Templator {
  
  readonly _element: HTMLElement
  
  constructor(tagName: string) {
    this._element = document.createElement(tagName);
  }
  
  private _configureElement(config: TemplatorConfig): HTMLElement {
    Object.entries(config).forEach(([key, value]): void => {
      switch (key) {
        case `classes`:
          this._element.classList.add(...value);
          break;
        case `listeners`:
          Object.entries((value)).forEach(([eventName, listener]) => {
            this._element.addEventListener(eventName, listener as EventListenerOrEventListenerObject);
          });
          break;
        case `textContent`:
          this._element.textContent = config[key];
          break;
        case `items`:
          if (Array.isArray(value)) {
            value.forEach((block: Block) => {
              this._element.appendChild(block.getContent());
            })
          }
          break;
        default:
          if (key in this._element) {
            this._element.setAttribute(key, config[key]);
          }
          break;
      }
    });
    return this._element;
  }
  
  configureElement(config: TemplatorConfig): HTMLElement {
    return this._configureElement(config);
  }
}
