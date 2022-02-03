import {Block} from "../../components/block/block";
import {Container} from "../../components/container/container";
import {blockProperty} from "../../components/block/types";
import {renderPopup} from "../../utils/render";
import {bodyMaskTemplate} from "./template";

import "./style.scss";


export class Popup extends Block {
  
  popupContainer: Container;
  
  constructor(props: blockProperty) {
    
    const popupContainer: Container = props.popupContainer;
    
    const body: HTMLElement | null = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
    }
    super("div", {
      classes: ["body-mask"],
      popupContainer,
      listeners: {
        click: () => {
          this.hide();
        }
      }
    }, bodyMaskTemplate);
    
    this.popupContainer = popupContainer;
  }
  
  get container() {
    return this.popupContainer;
  }
  
  show() {
    const body: HTMLElement | null = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
    }
    renderPopup(this);
  }
  
  hide() {
    const body: HTMLElement | null = document.querySelector("body");
    if (body) {
      body.style.overflow = "visible";
    }
    this.getContent().remove();
  }
  
}
