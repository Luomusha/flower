import {action, computed, observable} from "mobx";
import {Shape} from "./Shape";
import {Unregister} from "./Unregister";

export type InitData = Data[]
export type Data = {

}

export interface ProxyType {
    shapes: Shape[];
    initData: (data: InitData) => void;
    setActiveElementId: (id: string) => void;
    setFocusElementId: (id: string) => void;
    setHoverElementId: (id: string) => void;
    proxyMoveToActiveElement: (x: number, y: number) => void;
    proxyMoveByActiveElement: (dx: number, dy: number) => void;
    proxyResizeActiveElement: (id: string) => void;
}


export class Proxy implements ProxyType {
    @observable shapes: Shape[] = [];

    @action initData(data: InitData) {
        this.shapes = data.map(d => {
            return new Unregister()
        });
    }

    @action setActiveElementId(id: string) {
        Shape.activeElementId = id;
    }

    @action setFocusElementId(id: string) {
        Shape.focusElementId = id;
    }

    @action setHoverElementId(id: string) {
        Shape.hoverElementId = id;
    }

    @computed get activeElement() {
        return this.shapes.find(shape => shape.id === Shape.activeElementId)
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


