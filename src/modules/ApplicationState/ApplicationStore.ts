import set from "../../utils/set";
import EventBus from "../../utils/EventBus";
import {ApplicationStateConfig} from "./types";

export enum StoreEvents {
  Updated = "updated",
}

class ApplicationStore extends EventBus {
  
  state: ApplicationStateConfig = {};
  
  public set(path: string, value: unknown) {
    set(this.state, path, value);
    
    this.emit(StoreEvents.Updated, path, value);
  }
  
  public getState() {
    return this.state;
  }
}

export default new ApplicationStore();