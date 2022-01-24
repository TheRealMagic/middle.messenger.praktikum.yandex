import {Meta, blockProperty, ExtendedTextInputConfig} from "./types";
import EventBus from "../../utils/EventBus";
import Templator from "../../utils/Templator/Templator";
import {TemplatorConfig} from "../../utils/Templator/TemplatorTypes";

export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };
  
  protected _element: HTMLElement;
  
  protected _meta: Meta;
  
  protected props: blockProperty;
  
  eventBus: Function;
  
  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName: string = "div", props: blockProperty = {}, extendedConfig: ExtendedTextInputConfig = {}) {
    const eventBus: EventBus = new EventBus();
    this._meta = {
      tagName,
      props,
      extendedConfig
    };
    
    this.props = this._makePropsProxy(props);
    
    this.eventBus = (): EventBus => eventBus;
    
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }
  
  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }
  
  private init(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }
  
  private _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }
  
  // Может переопределять пользователь, необязательно трогать
  componentDidMount() {}
  
  dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }
  
  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(): boolean {
    return true;
  }
  
  private _componentDidUpdate(/*oldProps: blockProperty, newProps: blockProperty*/): void {
    const response = this.componentDidUpdate(/*oldProps, newProps*/);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }
  }
  
  setProps = (nextProps: blockProperty) => {
    if (!nextProps) {
      return;
    }
    
    Object.assign(this.props, nextProps);
  };
  
  get element() {
    return this._element;
  }
  
  _render(): void {
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    const newElement: HTMLElement = this.render();
    if (this._element) {
      this._element.replaceWith(newElement);
      this._element = newElement;
    } else {
      this._element = newElement;
    }
  }
  
  // Может переопределять пользователь, необязательно трогать
  render(config?: TemplatorConfig): HTMLElement {
    const templator: Templator = new Templator(this._meta.tagName);
    return templator.configureElement(config || this.props);
  }
  
  getContent() {
    return this.element;
  }
  
  private _makePropsProxy(props: blockProperty):blockProperty  {
    const self: Block = this;
    return new Proxy(props, {
      get(target: Meta, property: string, receiver) {
        return Reflect.get(target, property, receiver);
      },
      set(target: blockProperty, property: string, value, receiver) {
        if (target[property] !== value) {
          const oldValue = target[property];
          Reflect.set(target, property, value, receiver);
          self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldValue, value);
        }
        return true;
      },
      deleteProperty(/*target: blockProperty, property: string*/) {
        throw new Error("нет доступа");
      }
    });
  }
  
  show() {
    this._element.style.display = "block";
  }
  
  hide() {
    this._element.style.display = "none";
  }
}
