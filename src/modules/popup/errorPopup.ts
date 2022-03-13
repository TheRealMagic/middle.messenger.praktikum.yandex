import {Label} from "../../components/label/label";
import {Input} from "../../components/Input/input";
import {Container} from "../../components/container/container";
import {Popup} from "./popup";
import {errorContainerTemplate} from "./template";


export default class ErrorPopup {
  
  static showErrorPopup(errorText: string = "Ошибка") {
    const errorLabel: Label = new Label({
      textContent: errorText
    });
    const errorOkBtn = new Input({
      value: "OK",
      classes: [
        "popup-btn",
        "base-input-button",
        "sign-btn"
      ],
      listeners: {
        click: () => {
          loginErrorMessage.hide();
        }
      }
    });
    const signUpErrorPopup: Container = new Container({
      classes: [
        "main-block",
        "change-avatar-popup"
      ],
      listeners: {
        click: (e: Event) => {
          e.cancelBubble = true;
        }
      },
      errorLabel,
      errorOkBtn
    }, errorContainerTemplate);
    const loginErrorMessage = new Popup({popupContainer: signUpErrorPopup});
    loginErrorMessage.show();
  }
  
}