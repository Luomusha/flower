import {action, computed, observable} from "mobx";
import {Data, ViewHandler} from "./Handler";
import {shapeConfigMap} from "../config";
import {unregisterShapeConfig} from "../config/UnregisterShape";

export type InitData = Data[]

export interface ProxyType {
    shapes: ViewHandler[];
    initData: (data: InitData) => void;
    activeElement: ViewHandler | undefined;

    setActiveElementId(id: string): void;

    setActiveElementPoint(id: number): void;

    setFocusElementId(id: string): void;

    setHoverElementId(id: string): void;

    proxyMoveActiveElementTo(x: number, y: number): void;

    proxyMoveActiveElementPointTo(x: number, y: number): void;

    proxyMoveActiveElementBy(dx: number, dy: number): void;

    proxyMoveActiveElementPointBy(dx: number, dy: number): void;

    proxyResizeActiveElement(id: string): void;


}


export class Proxy implements ProxyType {

    @observable shapes: ViewHandler[] = [];

    @action initData(data: InitData) {
        this.shapes = data.map(d => {
            const config = shapeConfigMap.get(d.shape) || unregisterShapeConfig;
            return new config.handler(d);
        });
    }

    @action setActiveElementId(id: string) {
        ViewHandler.activeElementId = id;
    }

    @action setActiveElementPoint(id: number): void {
        ViewHandler.activeElementPoint = id;
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

    @computed get activeElementPoint() {
        return this.activeElement?.points[ViewHandler.activeElementPoint]
    }


    proxyMoveActiveElementBy(dx: number, dy: number) {
        if (this.activeElement) {
            this.activeElement.moveBy(dx, dy);
        }
    }

    proxyMoveActiveElementPointBy(dx: number, dy: number) {
        if (this.activeElement && this.activeElementPoint) {
            this.activeElement.updateActivePointBy(dx, dy)
        }
    }

    proxyMoveActiveElementTo(x: number, y: number) {

    }

    proxyMoveActiveElementPointTo(x: number, y: number) {

    }

    proxyResizeActiveElement(id: string) {

    }

}
