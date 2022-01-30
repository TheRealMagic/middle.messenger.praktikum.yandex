export const enum ProfileStates {
  Preview = "preview",
  ChangeInfo = "changeInfo",
  ChangePass = "changePass"
}

export class ProfilePageController {
  currentState: string;
  
  constructor() {
    this.currentState = ProfileStates.Preview;
  }
  
  setState(state: ProfileStates) {
    this.currentState = state;
  }
  
  get state() {
    return this.currentState;
  }
}