import {getContainerHTML} from "../components/container/container.js" 

function showInputLabel(e) {
  const labled = !!document.querySelector(`.${e.target.name}-label`);
  if (e.target.value && !labled) {
    addInputLabel(e);
  } else if (!e.target.value && labled) {
    deleteInputLabel(e);
  }
}

function addInputLabel(e) {
  const context = {
    tag: "div",
    classes: e.target.name + "-label base-label",
    textContent: e.target.placeholder,
  };
  const label = getContainerHTML(context);
  e.target.insertAdjacentHTML("beforebegin", label);
}

function deleteInputLabel(e) {
  const label = document.querySelector(`.${e.target.name}-label`);
  label && label.parentElement.removeChild(label);
}

function showWarning(e) {
  const warninged = !!document.querySelector(`.${e.target.name}-warning`);
  if (e.target.value && !warninged) {
    addInputWarning(e);
  } else if (!e.target.value && warninged) {
    deleteInputWarning(e);
  }
}

function addInputWarning(e) {
  const context = {
    tag: "div",
    classes: e.target.name + "-warning base-label warning-label",
    textContent: e.target.placeholder,
  };
  const label = getContainerHTML(context);
  e.target.insertAdjacentHTML("afterend", label);
}

function deleteInputWarning(e) {
  const label = document.querySelector(`.${e.target.name}-warning`);
  label && label.parentElement.removeChild(label);
}

export {showInputLabel, showWarning}
