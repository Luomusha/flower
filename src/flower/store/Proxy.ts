import {InitData, Proxy as ProxyType} from "../../types";
import {action, computed, observable} from "mobx";
import {Shape} from "./Shape";
import {Link} from "./Link";
import {Element} from "./Element";

export class Proxy implements ProxyType {
    @observable shapes: Shape[] = [];
    @observable links: Link[] = [];


    @action initData(data: InitData) {
        this.shapes = data.shapes.map(shape => new Shape(shape));
        this.links = data.links.map(link => new Link(link));
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
        return this.shapes.find(element => element.id === Element.activeElementId)
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


