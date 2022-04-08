import {assert} from "chai";
import {Templator} from "./Templator";
import {Block} from "../../components/block/block";


describe("Templator tests", () => {
  function getTemplator(template: string) {
    return new Templator(template);
  }
  
  const emptyTemplate: string = "<div></div>";
  const fullTemplate: string = "<div {{ classes textContent child }}></div>";
  
  it("should return HTML element with the same outerHTML", () => {
    const templator = getTemplator(emptyTemplate);
    const elem = templator._getElement(emptyTemplate);
    assert.equal<string>(elem.outerHTML, emptyTemplate, "HTML совпадают");
  });
  
  it("isBlock check", () => {
    const templator = getTemplator(emptyTemplate);
    const block: Block = new Block("div",{}, emptyTemplate);
    assert.isTrue(templator._isBlock(block), "correctly block check");
  });
  
  it("isBlockArray check", () => {
    const templator = getTemplator(emptyTemplate);
    const block1: Block = new Block("div",{}, emptyTemplate);
    const block2: Block = new Block("div",{}, emptyTemplate);
    const blockArray: Block[] = [block1, block2];
    assert.isTrue(templator._isBlockArray(blockArray), "correctly blockArray check");
  });
  
  it("isStringArray check", () => {
    const templator = getTemplator(emptyTemplate);
    const stringArray: string[] = ["", ""];
    assert.isTrue(templator._isStringArray(stringArray), "correctly stringArray check");
  });
  
  it("compile element classList check", () => {
    const templator = getTemplator(fullTemplate);
    const classList: string[] = [
      "Test",
      "Test2"
    ];
    const resultElem: HTMLElement = templator._compileTemplate({classes: classList});
    assert.isArray(Array.from(resultElem.classList), "correctly array check");
    assert.deepEqual(Array.from(resultElem.classList), classList, "correctly classList check");
  });
  
  it("compile element textContent check", () => {
    const templator = getTemplator(fullTemplate);
    const textContent: string = "TEST";
    const resultElem: HTMLElement = templator._compileTemplate({textContent});
    assert.deepEqual(resultElem.textContent, textContent, "correctly textContent check");
  });
  
  it("compile element child check", () => {
    const templator = getTemplator(fullTemplate);
    const textContent: string = "TEST";
    const resultElem: HTMLElement = templator._compileTemplate({textContent});
    assert.deepEqual(resultElem.textContent, textContent, "correctly textContent check");
  });
  
  it("compile element child check", () => {
    const templator = getTemplator(fullTemplate);
    const child: Block = new Block("div", {}, emptyTemplate);
    const resultElem: HTMLElement = templator._compileTemplate({child});
    assert.isTrue(resultElem.hasChildNodes(), "correctly child check");
  });
  
});
