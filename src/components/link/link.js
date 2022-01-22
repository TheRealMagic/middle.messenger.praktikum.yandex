import { Templator } from "../Templator.js";

const LABEL_TEMPLATE = `<a {{ classes }} {{ style }} {{ path }}>{{textContent}}</a>`;

const defaultClasses = [
    "base-link"
];

function getLinkHTML(config) {
    config.classes = (config.classes || "") + " " + defaultClasses.join(" ");
    const templator = new Templator(LABEL_TEMPLATE);
    return templator.compile(config);
}

export {getLinkHTML};