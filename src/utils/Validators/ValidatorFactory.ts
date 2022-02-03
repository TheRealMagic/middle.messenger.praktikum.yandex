import {NameValidator} from "./NameValidator";
import {PasswordValidator} from "./PasswordValidator";
import {LoginValidator} from "./LoginValidator";
import {PhoneValidator} from "./PhoneValidator";
import {BaseValidator} from "./BaseValidator";
import {EmailValidator} from "./EmailValidator";

export class ValidatorFactory {
  
  static getValidator(field: string) {
    field = field.toLowerCase();
    if (field.includes("name")) {
      return new NameValidator();
    } else if (field.includes("password")) {
      return new PasswordValidator();
    } else if (field.includes("login")) {
      return new LoginValidator();
    } else if (field.includes("phone")) {
      return new PhoneValidator();
    } else if (field.includes("email")) {
      return new EmailValidator();
    } else {
      return new BaseValidator();
    }
  }
  
}
