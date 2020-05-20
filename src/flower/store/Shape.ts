import {randomId} from "../util";
import {action, computed, observable} from "mobx";
import {NAME} from "../config/UnregisterShape";

export type ShapeData = {
    id?: string;
    name: string
    x: number;
    y: number;
}

export interface Movable {
    x: number;
    y: number;

    moveTo(x: number, y: number): void;

    moveBy(dx: number, dy: number): void;
}

export interface Scalable {
    scale: number;

    resizeTo(scale: number): void;

    resizeBy(dScale: number): void;
}

export interface Displayable {
    readonly id: string;
    readonly name: string;
    x: number;
    y: number;
    focus: boolean;
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
    centerX: number;
    centerY: number;

    measureSpaceHeight(): number;

    measureSpaceWidth(): number;
}

export interface Overlay {
    overlays: Shape[]
}

export abstract class Shape implements Displayable, Movable, Scalable, Overlay {
    protected constructor(e: ShapeData) {
        this.name = e.name || NAME;
        this.id = e.id || randomId();
        this.x = e.x || 10;
        this.y = e.y || 10;
        this.scale = 1;
    }
    abstract overlays: any[];
    resizeBy(dScale: number): void {

    };

    resizeTo(scale: number): void {

    };


    readonly id: string;
    readonly name: string;

    @observable x: number;
    @observable y: number;
    @observable scale: number;
    @action moveBy = (dx: number, dy: number) => {
        this.x += dx;
        this.y += dy;
    };

    @action moveTo = (x: number, y: number) => {
        this.x = x;
        this.y = y;
    };

    abstract measureSpaceHeight(): number;

    abstract measureSpaceWidth(): number;

    @computed get maxX(): number {
        return this.x + this.measureSpaceWidth()
    };

    @computed get maxY(): number {
        return this.y + this.measureSpaceHeight()
    };

    @computed get minX(): number {
        return this.x
    };

    @computed get minY(): number {
        return this.y
    };

    @computed get centerX(): number {
        return this.x + this.measureSpaceWidth() * 0.5
    };

    @computed get centerY(): number {
        return this.y + this.measureSpaceHeight() * 0.5
    };


    @observable static activeElementId: string;
    @observable static focusElementId: string;
    @observable static hoverElementId: string;


    @computed get focus() {
        return Shape.focusElementId === this.id;
    };



}
