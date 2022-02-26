import {Block} from "../components/block/block";
import EventBus from "../utils/EventBus";

export class BaseController {
  
  eventBus: EventBus;
  
  view: Block;
  
  constructor(view: Block) {
    this.view = view;
    this.eventBus = new EventBus();
  }
  
  hideView(): void {
    this.view.hide();
  }
  
  showView(): void {
    this.view.show();
  }
}
