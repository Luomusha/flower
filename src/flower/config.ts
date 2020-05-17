import {CircleElement} from "./component/CircleElement";
import {RectElement} from "./component/RectElement";
import {ElementConfig, ElementConfigMap} from "../types";
import {LinkElement} from "./component/LinkElement";

export const unregisterElementConfig: ElementConfig = {
    name: "Unregister",
    element: RectElement,
};

const circleElementConfig: ElementConfig = {
    name: "Circle",
    element: CircleElement,

};
const rectElementConfig: ElementConfig = {
    name: "Rect",
    element: RectElement,
};

const linkElementConfig: ElementConfig = {
    name: "Link",
    element: LinkElement,
};

export const elementConfigMap: ElementConfigMap = new Map();
elementConfigMap.set(unregisterElementConfig.name, unregisterElementConfig);
elementConfigMap.set(circleElementConfig.name, circleElementConfig);
elementConfigMap.set(rectElementConfig.name, rectElementConfig);
elementConfigMap.set(linkElementConfig.name, linkElementConfig);
