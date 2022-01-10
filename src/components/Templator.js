import get from "../utils/get";

const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

const printableProps = {
  id: "id",
  classes: "class",
  handleClick: "onсlick",
  style: "style",
  placeholder: "placeholder",
  type: "type",
  value: "value",
  path: "href",
  name: "name",
  onclick: "onclick",
  alt: "alt",
  src: "src"
};

class Templator {

  _template = "";

  constructor(template) {
    this._template = template;
  }

  _compileTemplate(ctx) {
    let tmpl = this._template,
      key = null;

    while ((key = TEMPLATE_REGEXP.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim();
        const data = get(ctx, tmplValue);
        if (data) {
          const propName = key[0].replace(/[{,}, ]/gi, "");
          let replacedText = "";
          if (typeof data === "function") {
            window[tmplValue] = data;
            replacedText = printableProps[propName] ? `${printableProps[propName]}='window.${tmplValue}()'` : `window.${tmplValue}()`;
            tmpl = tmpl.replace(
              new RegExp(key[0], "gi"),
              replacedText
            );
            continue;
          } else {
            replacedText = printableProps[propName] ? `${printableProps[propName]}='${data}'` : data;
            tmpl = tmpl.replace(new RegExp(key[0], "gi"), replacedText);
          }
        }
      }
    }
    tmpl = tmpl.replace(TEMPLATE_REGEXP, '');
    return tmpl;
  }

  compile(ctx) {
    return this._compileTemplate(ctx);
  }
}

export { Templator };