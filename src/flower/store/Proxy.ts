import {action, computed, observable} from "mobx";
import {shapeConfigMap} from "../config/";
import {unregisterShapeConfig} from "../config/UnregisterShape";
import {AreaData, LineData, PointData, ViewHandler} from "./Handler";

export type InitData = Data[]
export type Data = PointData | LineData | AreaData

export interface ProxyType {
    shapes: ViewHandler[];
    initData: (data: InitData) => void;
    setActiveElementId: (id: string) => void;
    setFocusElementId: (id: string) => void;
    setHoverElementId: (id: string) => void;
    proxyMoveToActiveElement: (x: number, y: number) => void;
    proxyMoveByActiveElement: (dx: number, dy: number) => void;
    proxyResizeActiveElement: (id: string) => void;
}


export class Proxy implements ProxyType {
    @observable shapes: ViewHandler[] = [];

    @action initData(data: InitData) {
        this.shapes = data.map(d => {
            const config = shapeConfigMap.get(d.name) || unregisterShapeConfig;
            return new config.proxyShape(d);
        });
    }

    @action setActiveElementId(id: string) {
        ViewHandler.activeElementId = id;
    }

    @action setFocusElementId(id: string) {
        ViewHandler.focusElementId = id;
    }

    @action setHoverElementId(id: string) {
        ViewHandler.hoverElementId = id;
    }

    @computed get activeElement() {
        return this.shapes.find(shape => shape.id === ViewHandler.activeElementId)
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


