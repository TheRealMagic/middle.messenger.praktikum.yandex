
export class BaseValidator {
  
  public field: HTMLInputElement;
  
  protected validFncs: {text: string, fn: (value: string) => boolean}[];
  
  constructor(validFncs?: {text: string, fn: (value: string) => boolean}[] ) {
    validFncs = validFncs || [];
    validFncs.push({
      text: "Заполните поле",
      fn: (value: string) => {
        return !!value;
      }
    });
    this.validFncs = validFncs;
  }
  
  checkValid(): string | undefined {
    if (this.field) {
      for (let i = 0; i < this.validFncs.length; i++) {
        const current: {text: string, fn: (value: string) => boolean} = this.validFncs[i];
        if (!current.fn(this.field.value)) {
          return current.text;
        }
      }
    }
  }
}
