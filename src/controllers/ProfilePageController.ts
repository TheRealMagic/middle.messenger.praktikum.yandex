import {BaseController} from "./BaseController";
import {Block} from "../components/block/block";

export const enum ProfileStates {
  Preview = "preview",
  ChangeInfo = "changeInfo",
  ChangePass = "changePass"
}

export class ProfilePageController extends BaseController {
  
  currentState: string;
  
  constructor(view: Block) {
    super(view);
    this.currentState = ProfileStates.Preview;
  }
  
  setState(state: ProfileStates) {
    this.currentState = state;
  }
  
  get state() {
    return this.currentState;
  }
}
