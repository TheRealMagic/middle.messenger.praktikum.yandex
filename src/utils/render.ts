import {Block} from "../components/block/block";

export function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (root) {
    root.innerHTML = "";
    root.appendChild(block.getContent());
  }
  return root;
}

export function renderPopup(block: Block) {
  const root = document.querySelector("body");
  if (root) {
    root.appendChild(block.getContent());
  }
  return root;
}
