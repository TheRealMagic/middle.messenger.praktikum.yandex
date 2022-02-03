import {BaseValidator} from "./BaseValidator";

export class EmailValidator extends BaseValidator {
  
  constructor() {
  
    const validFncs: {text: string, fn: (value: string) => boolean}[] = [];
  
    validFncs.push({
      text: "Только латинница",
      fn: (value: string) => {
        return !/[а-яёА-ЯЁ]/.test(value);
      }
    });
  
    validFncs.push({
      text: "Неверный формат email",
      fn: (value: string) => {
        return /[\w\d]+@\w+\.\w+/.test(value);
      }
    });
    
    super(validFncs);
  }
}
