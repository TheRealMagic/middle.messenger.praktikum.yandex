import {Block} from "../components/block/block";
import EventBus from "../utils/EventBus";

export class BaseController {
  
  eventBus: EventBus;
  
  view: Block;
  
  constructor(view: Block) {
    this.view = view;
    this.eventBus = new EventBus();
    this.eventBus.on("initView", () => this.initView());
    this.eventBus.emit("initView");
  }
  
  initView() {
    this.view.render();
  }
}
