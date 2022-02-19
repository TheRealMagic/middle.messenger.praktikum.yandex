import get from "../get";
import {Block} from "../../components/block/block";


const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

const printableProps: Record<string, string> = {
  id: "id",
  classes: "class",
  style: "style",
  placeholder: "placeholder",
  type: "type",
  value: "value",
  href: "href",
  name: "name",
  alt: "alt",
  src: "src"
};

export class Templator {
  
  _template = "";
  
  items: HTMLElement[] = [];
  
  classes: string[] = [];
  
  textContent: string = "";
  
  constructor(template: string) {
    this._template = template;
  }
  
  _compileTemplate(ctx: Record<string, string | string[] | Block>): HTMLElement {
    let tmpl = this._template,
      key = null;
    const result: string[] = [];
    const valueIndex = 1;
    while ((key = TEMPLATE_REGEXP.exec(tmpl))) {
      if (key[valueIndex]) {
        const tmpls: string[] = key[valueIndex].trim().split(" ").filter((item) => item);
        let tmplValue: string | undefined = tmpls.pop();
        while (tmplValue) {
          const data = get(ctx, tmplValue);
          if (data) {
            if (this._isBlock(data)) {
              this.items.push(data.getContent());
              tmplValue = tmpls.pop();
              continue;
            } else if (this._isBlockArray(data)) {
              data.forEach((item) => {
                this.items.push(item.getContent());
              });
              tmplValue = tmpls.pop();
              continue;
            } else {
              let replacedText = "";
              if (!this._isStringArray(data)) {
                if (tmplValue === "textContent") {
                  this.textContent = data;
                  tmplValue = tmpls.pop();
                  continue;
                }
                if (data !== "false") {
                  replacedText = printableProps[tmplValue] ? `${printableProps[tmplValue]}='${data}'` : data;
                }
              } else {
                if (tmplValue === "classes") {
                  this.classes = data;
                  replacedText = `${printableProps[tmplValue]}='${(data as string[]).join(" ")}'`;
                } else {
                  const newData = (data as string[]).join("");
                  replacedText = printableProps[tmplValue] ? `${printableProps[tmplValue]}='${newData}'` : newData;
                }
              }
              result.push(replacedText);
            }
          }
          tmplValue = tmpls.pop();
        }
      }
    }
    tmpl = tmpl.replace(TEMPLATE_REGEXP, result.join(" "));
    return this._getElement(tmpl);
  }
  
  _getElement(tmpl: string): HTMLElement {
    const fragment = document.createElement("template");
    fragment.innerHTML = tmpl;
    let root: HTMLElement;
    if (this.classes!.length) {
      // @ts-ignore
      root = fragment.content.querySelector(`.${this.classes.join(".")}`);
    } else {
      root = fragment.content.children[0] as HTMLElement;
    }
    if (root) {
      root.textContent = this.textContent;
      this.items.forEach((item) => root!.appendChild(item));
    }
    return root;
  }
  
  _isBlock(value: unknown): value is Block {
    return value instanceof Block;
  }
  
  _isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every(el => typeof el === "string");
  }
  
  _isBlockArray(value: unknown): value is Block[] {
    return Array.isArray(value) && value.every(el => el instanceof Block);
  }
  
  compile(ctx: Record<string, any>) {
    return this._compileTemplate(ctx);
  }
}
