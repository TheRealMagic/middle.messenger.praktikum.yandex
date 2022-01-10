import { Templator } from "../Templator";
import {getContainerHTML} from "../container/container"
import "../inputElement/inputElement.css";

const INPUT_TEMPLATE = `<input {{ name }} {{ type }} {{ placeholder }} {{ classes }} {{ style }} {{ value }} {{ onclick }} {{ disabled }}>{{ textContent }}</input>`;

const defaultClasses = [
    "base-input"
];

const defaultTextClass = "base-input-text";
const defaultButtonClass = "base-input-button";

const defaultContainerConfig = {
    tag: "div",
    classes: "input-container",
};

function getInputHTML(config) {
    config.classes = (config.classes || "") + " " + defaultClasses.join(" ");
    let tpl;
    if (!config.type || config.type === "text" || config.type === "password") {
        applyTextClass(config);
        tpl = getTextInputContainer(config);
    } else if (config.type === "button") {
        applyButtonClass(config);
    }
    if (!tpl) {
        const templator = new Templator(INPUT_TEMPLATE);
        tpl = templator.compile(config)
    }
    return tpl;
}

function getTextInputContainer(config) {
    const templator = new Templator(INPUT_TEMPLATE);
    const containerConfig =  config.containerConfig || defaultContainerConfig;
    containerConfig.textContent = containerConfig.textContent || "";
    if (config && config.labelConfig) {
        containerConfig.textContent += getInputLabelHTML(config.labelConfig);
    }
    containerConfig.textContent += templator.compile(config)
    return getContainerHTML(containerConfig);
}

function getInputLabelHTML(labelConfig) {
    return getContainerHTML(labelConfig);
}

function applyTextClass(config) {
    config.classes += ` ${defaultTextClass}`;
}

function applyButtonClass(config) {
    config.classes += ` ${defaultButtonClass}`;
}

export {getInputHTML};