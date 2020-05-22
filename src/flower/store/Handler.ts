import {action, computed, observable} from "mobx";
import {randomId} from "../util";

export type Vector = { vx: number; vy: number; }

export type Point = {
    x: number;
    y: number;
}


interface Movable {
    position: Vector;

    moveTo(vx: number, vy: number): void;

    moveBy(dx: number, dy: number): void;
}


export type Data = {
    id: string;
    x: number;
    y: number;
    points: Point[]
    shape: string
}

export interface ViewProps {
    id: string;
    position: Vector;
    points: Point[];
    shape: string;
    overlays: Data[];
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
    spaceWidth: number;
    spaceHeight: number;
    focus: boolean;
}

export class ViewHandler implements ViewProps, Movable {
    constructor(data: Data) {
        this.id = data.id;
        this.shape = data.shape;
        this.points = data.points;
        this.position = {vx: data.x, vy: data.y};
    }

    @observable static activeElementId: string;
    @observable static activeOverlayId: string;
    @observable static focusElementId: string;
    @observable static hoverElementId: string;

    readonly id: string;
    @observable position: Vector;
    @observable points: Point[];
    @observable shape: string;

    @computed get overlays() {
        return this.points.map(p => ({id: randomId(), x: p.x, y: p.y, points: [], shape: "Point"}))
    };

    @computed get maxX(): number {
        const maxXPoint = this.points.reduce((p, c) => p.x > c.x ? p : c);
        return maxXPoint.x
    };

    @computed get maxY(): number {
        const maxYPoint = this.points.reduce((p, c) => p.y > c.y ? p : c);
        return maxYPoint.y
    };

    @computed get minX(): number {
        const maxXPoint = this.points.reduce((p, c) => p.x < c.x ? p : c);
        return maxXPoint.x
    };

    @computed get minY(): number {
        const maxYPoint = this.points.reduce((p, c) => p.y < c.y ? p : c);
        return maxYPoint.y
    };

    @computed get spaceHeight(): number {
        return this.maxY - this.minY
    };

    @computed get spaceWidth(): number {
        return this.maxX - this.minX
    };

    @computed get focus() {
        return ViewHandler.focusElementId === this.id;
    };

    @action moveBy(dx: number, dy: number): void {
        this.position.vx += dx;
        this.position.vy += dy;
    }

    @action moveTo(vx: number, vy: number): void {
        this.position.vx = vx;
        this.position.vy = vy;
    }

}
