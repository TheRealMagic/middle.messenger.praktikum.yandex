import { Templator } from "../Templator.js";

const CONTAINER_TEMPLATE = `<{{ tag }} {{ }} {{ src }} {{ style }} {{ classes }} {{ alt }}>{{ textContent }}</{{ tag }}>`;

function getContainerHTML(config) {
    const templator = new Templator(CONTAINER_TEMPLATE);
    return templator.compile(config);
}

export {getContainerHTML};