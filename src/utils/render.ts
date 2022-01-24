import {Block} from "../components/block/block";

export function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (root) {
    root.appendChild(block.getContent());
  }
  return root;
}

export function hiddenAdd(root: Block, block: Block): Block {
  if (root && block) {
    root.getContent().appendChild(block.getContent());
  }
  return root;
}
