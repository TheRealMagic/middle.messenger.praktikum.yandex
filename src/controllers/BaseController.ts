import {Block} from "../components/block/block";
import EventBus from "../utils/EventBus";

export enum BaseControllerEvents {
  VIEW_RENDERED = "viewRendered"
}

export class BaseController {
  
  eventBus: EventBus;
  
  view: Block;
  
  constructor(view: Block) {
    this.view = view;
    this.eventBus = new EventBus();
    this.subscribeBase();
  }
  
  subscribeBase() {
    this.eventBus.on(BaseControllerEvents.VIEW_RENDERED, () => this.onViewRendered());
  }
  
  onViewRendered() {}
  
  hideView(): void {
    this.view.hide();
  }
  
  showView(): void {
    this.view.show();
  }
}
