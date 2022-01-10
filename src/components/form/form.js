import "../form/form.css"
import { Templator } from "../Templator";

const FORM_TEMPLATE = `<form {{ id }} {{ name }} {{ action }} {{ method }} {{ classes }} {{ style }}>{{ textContent }}</form>`;

const defaultClasses = [
    "base-form"
];

function getFormHTML(config) {
    config.classes = (config.classes || "") + " " + defaultClasses.join(" ");
    const templator = new Templator(FORM_TEMPLATE);
    return templator.compile(config);
}

export {getFormHTML};