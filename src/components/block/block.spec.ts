import {assert} from "chai";
import {Block} from "./block";

describe("Block tests", () => {
  
  it( "init should render element", () => {
    const block: Block = new Block("div", {}, "<div></div>");
    assert.isDefined(block.getContent());
  });
  
  it( "should save init props", () => {
    const prop: string = "test";
    const block: Block = new Block("div", {prop}, "<div></div>");
    assert.equal<string>(block.props.prop, prop);
  });
  
  it( "should save new props", () => {
    const prop: string = "test";
    const block: Block = new Block("div", {}, "<div></div>");
    block.setProps({prop});
    assert.equal<string>(block.props.prop, prop);
  });
  
  it( "should change props", () => {
    const prop: string = "test";
    const block: Block = new Block("div", {prop}, "<div></div>");
    const prop2: string = "test2";
    block.setProps({prop: prop2});
    assert.equal<string>(block.props.prop, prop2);
  });
  
  it( "shouldnt delete props", () => {
    const prop: string = "test";
    const block: Block = new Block("div", {prop}, "<div></div>");
    assert.throw(() => {
      delete block.props.prop;
    });
  });
  
  it( "should hide", () => {
    const block: Block = new Block("div", {}, "<div></div>");
    block.hide();
    assert.equal(block.getContent().style.display, "none");
  });
  
  it( "should show", () => {
    const block: Block = new Block("div", {}, "<div></div>");
    block.show();
    assert.equal(block.getContent().style.display, "block");
  });
  
});