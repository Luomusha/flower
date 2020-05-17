import {InitData, LineType, Proxy as ProxyType} from "../../types";
import {action, computed, observable} from "mobx";
import {Element} from "./Element";
import {Circle} from "./Circle";
import {Rect} from "./Rect";
import {Link} from "./Link";

export class Proxy implements ProxyType {
    @observable elements: Element[] = [];

    @action initData(data: InitData) {
        this.elements = data.map(d => {
            if (d.name === "Circle") {
                return new Circle(d)
            } else if (d.name === "Rect") {
                return new Rect(d)
            } else {
                return new Link(d as LineType)
            }
        });
    }

    @action setActiveElementId(id: string) {
        console.log("setActive", id)
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


