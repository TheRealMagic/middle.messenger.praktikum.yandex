import {blockProperty, Meta} from "./types";
import EventBus from "../../utils/EventBus";
import {Templator} from "../../utils/Templator/Templator";
import "./styles.scss";

export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };
  
  protected _element: HTMLElement;
  
  protected _meta: Meta;
  
  public props: blockProperty;
  
  eventBus: Function;
  
  protected template: string | undefined= "";
  
  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName: string = "div", props?: blockProperty, template?: string) {
    const eventBus: EventBus = new EventBus();
    
    this.template = template;
    
    this._meta = {
      tagName,
      props
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
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }
  
  private _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }
  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }
  
  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }
  
  // Может переопределять пользователь, необязательно трогать
  componentDidMount() {
  }
  
  dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }
  
  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldValue?: string | boolean, newValue?:  string | boolean): boolean {
    return true;// oldValue !== newValue;
  }
  
  private _componentDidUpdate(oldValue?:  string | boolean, newValue?:  string | boolean): void {
    const response = this.componentDidUpdate(oldValue,  newValue);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
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
    const newElement: HTMLElement= this.render();
    this.removeListeners();
    const tempEl = this._element;
    this._element = newElement;
    tempEl.replaceWith(newElement);
    this.addListeners();
  }
  
  // Может переопределять пользователь, необязательно трогать
  render(): HTMLElement {
    const templator: Templator = new Templator(this.template || "");
    return templator.compile(this.props);
  }
  
  getContent() {
    return this.element;
  }
  
  private _makePropsProxy(props?: blockProperty): blockProperty {
    const self: Block = this;
    return new Proxy(props || {}, {
      get(target: Meta, property: string, receiver) {
        return Reflect.get(target, property, receiver);
      },
      // eslint-disable-next-line max-params
      set(target: blockProperty, property: string, value, receiver) {
        if (target[property] !== value) {
          const oldValue = target[property];
          Reflect.set(target, property, value, receiver);
          self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldValue, value);
        }
        return true;
      },
      deleteProperty() {
        throw new Error("нет доступа");
      }
    });
  }
  
  addListeners(): void {
    const listeners: Record<string, () => void> = this.props.listeners;
    if (!listeners || !this.element) {
      return;
    }
    Object.entries(listeners).forEach(([eventName, handler]) => {
      this.element.addEventListener(eventName, handler, {once: eventName === "blur"});
    });
  }
  
  removeListeners(): void {
    const listeners: Record<string, () => void> = this.props.listeners;
    if (!listeners || !this.element) {
      return;
    }
    Object.entries(listeners).forEach(([eventName, handler]) => {
      this.element.removeEventListener(eventName, handler);
    });
  }
  
  toggleClasses(insertClasses: string[], removeClasses: string[]): blockProperty{
    const cls: Set<string> = new Set(this.props.classes);
    if (cls.size) {
      removeClasses.forEach((remove: string) => cls.delete(remove));
      insertClasses.forEach((insert: string) => cls.add(insert));
    }
    return Array.from(cls);
  }
  
  show() {
    this._element.style.display = "block";
  }
  
  hide() {
    this._element.style.display = "none";
  }
}
