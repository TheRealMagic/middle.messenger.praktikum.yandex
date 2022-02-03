import {BaseValidator} from "./BaseValidator";

export class LoginValidator extends BaseValidator {
  
  constructor() {
    
    const validFncs: {text: string, fn: (value: string) => boolean}[] = [];
  
    validFncs.push({
      text: "Нет букв",
      fn: (value: string) => {
        return /\w+/.test(value);
      }
    });
    
    validFncs.push({
      text: "От 3 до 20 символов",
      fn: (value: string) => {
        return value.length >= 3 && value.length <= 20;
      }
    });
  
    validFncs.push({
      text: "Только латинница",
      fn: (value: string) => {
        return !/[а-яёА-ЯЁ]/.test(value);
      }
    });
  
    validFncs.push({
      text: "Есть спецсимволы или пробел",
      fn: (value: string) => {
        return !/["'&<>\s]/.test(value);
      }
    });

    
    super(validFncs);
  }
  
}
