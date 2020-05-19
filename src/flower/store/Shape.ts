import {randomId} from "../util";
import {action, computed, observable} from "mobx";

export type ShapeData = {
    id?: string;
    x: number;
    y: number;
    width?: number;
    height?: number;
}

export interface Movable {
    x: number;
    y: number;

    moveTo(x: number, y: number): void;

    moveBy(dx: number, dy: number): void;
}

export interface Resizeable {
    width: number;
    height: number;

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
    width: number;
    height: number;
    focus: boolean;
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;

    measureSpaceHeight(): number;

    measureSpaceWidth(): number;
}


export abstract class Shape implements Displayable, Movable, Resizeable, Scalable {
    protected constructor(e: ShapeData) {
        this.id = e.id || randomId();
        this.x = e.x || 10;
        this.y = e.y || 10;
        this.width = e.width || 10;
        this.height = e.height || 10;
        this.scale = 1;
    }


    abstract resizeBy(dScale: number): void;

    abstract resizeTo(scale: number): void;


    readonly id: string;
    abstract readonly name: string;

    @observable x: number;
    @observable y: number;
    @observable height: number;
    @observable width: number;
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


    @observable static activeElementId: string;
    @observable static focusElementId: string;
    @observable static hoverElementId: string;


    @computed get focus() {
        return Shape.focusElementId === this.id;
    };


}
