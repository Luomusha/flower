import {InitData, Proxy as ProxyType} from "../../types";
import {action, computed, observable} from "mobx";
import {Shape} from "./Shape";
import {Link} from "./Link";

export class Proxy implements ProxyType {
    @observable shapes: Shape[] = [];
    @observable links: Link[] = [];

    static activeElementId: string;
    static focusElementId: string;
    static hoverElementId: string;

    @action initData(data: InitData) {
        this.shapes = data.shapes.map(shape => new Shape(shape));
        this.links = data.links.map(link => new Link(link));
    }

    @action setActiveElementId(id: string) {
        Proxy.activeElementId = id;
    }

    @action setFocusElementId(id: string) {
        Proxy.focusElementId = id;
    }

    @action setHoverElementId(id: string) {
        Proxy.hoverElementId = id;
    }

    @computed get activeElement() {
        return [...this.shapes, ...this.links].find(element => element.id === Proxy.activeElementId)
    }

    proxyMoveActiveElement(id: string) {
        if(typeof this.activeElement)
        this.activeElement
    } ;

    proxyResizeActiveElement(id: string) {

    }


}


