import {BaseValidator} from "./BaseValidator";

export class NameValidator extends BaseValidator {
  
  constructor() {
    
    const validFncs: {text: string, fn: (value: string) => boolean}[] = [];
  
    validFncs.push({
      text: "Первая буква должна быть заглавной",
      fn: (value: string) => {
        if (!value) {
          return true;
        }
        return value[0] === value[0].toLocaleUpperCase();
      }
    });
  
    validFncs.push({
      text: "Есть пробелы и/или цифры",
      fn: (value: string) => {
        return !/[\d\s]/.test(value);
      }
    });
  
    validFncs.push({
      text: "Есть недопустимые символы",
      fn: (value: string) => {
        return !/["'&<>_]/.test(value);
      }
    });
    
    super(validFncs);
  }
  
}
