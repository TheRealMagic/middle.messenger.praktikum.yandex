import {Block} from "../components/block/block";

export class BaseController {
  
  view: Block;
  
  constructor(view: Block) {
    
    this.view = view;
    
  }
}
