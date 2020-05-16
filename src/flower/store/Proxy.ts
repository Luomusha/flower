import {CircleType, InitData, Proxy as ProxyType, RectType} from "../../types";
import {action, computed, observable} from "mobx";
import {Element} from "./Element";
import {Circle} from "./Circle";
import {Rect} from "./Rect";

export class Proxy implements ProxyType {
    @observable elements: Element[] = [];

    @action initData(data: InitData) {
        this.elements = data.map(d => {
            if (d.name === "Circle") {
                return new Circle(d as CircleType)
            } else if (d.name === "Rect") {
                return new Rect(d as RectType)
            } else {
                return new Rect(d as RectType)
            }
        });
    }

    @action setActiveElementId(id: string) {
        Element.activeElementId = id;
    }

    @action setFocusElementId(id: string) {
        Element.focusElementId = id;
    }

    @action setHoverElementId(id: string) {
        Element.hoverElementId = id;
    }

    @computed get activeElement() {
        return this.elements.find(element => element.id === Element.activeElementId)
    }

    @action proxyMoveByActiveElement(dx: number, dy: number) {
        if (this.activeElement) {
            this.activeElement.moveBy(dx, dy);
        }
    }

    @action proxyMoveToActiveElement(x: number, y: number) {

    }

    @action proxyResizeActiveElement(id: string) {

    }


}


