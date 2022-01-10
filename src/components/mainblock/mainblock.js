import { Templator } from "../Templator.js";

const MAIN_BLOCK_TEMPLATE = `<{{ tag }} {{ id }} {{ classes }} {{ style }}>{{ textContent }}</{{ tag }}>`;

function getMainBlockHTML(config) {
    config.classes += " main-block";
    const templator = new Templator(MAIN_BLOCK_TEMPLATE);
    return templator.compile(config);
}

export {getMainBlockHTML};