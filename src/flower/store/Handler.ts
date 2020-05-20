import {action, computed, observable} from "mobx";
import {randomId} from "../util";


export type Vector = { vx: number; vy: number; }
export type Point = { x: number; y: number; }
export type Line = Point & { points: Point[] }
export type Area = Line & { shape: string }

export type Data = { id: string; name: string; }
export type PointData = Point & Data;
export type LineData = Line & Data;
export type AreaData = Area & Data;

interface Movable extends PointData {
    moveTo(x: number, y: number): void;

    moveBy(dx: number, dy: number): void;
}

export interface Scalable {
    scale: number;

    resizeTo(scale: number): void;

    resizeBy(dScale: number): void;
}

export interface HasOverlay {
    overlays: ViewHandler[]
}

export abstract class ViewHandler implements PointData, Movable, HasOverlay {
    protected constructor(point: PointData) {
        this.id = point.id;
        this.name = point.name;
        this.x = point.x;
        this.y = point.y;
    }

    readonly id: string;
    @observable name: string;
    @observable x: number;
    @observable y: number;

    abstract overlays: ViewHandler[];

    @action moveBy(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    @action moveTo(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

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

    abstract measureSpaceHeight(): number;

    abstract measureSpaceWidth(): number;

    @observable static activeElementId: string;
    @observable static focusElementId: string;
    @observable static hoverElementId: string;

    @computed get focus() {
        return ViewHandler.focusElementId === this.id;
    };
}

export class PointHandler extends ViewHandler {
    measureSpaceWidth(): number {
        return 0;
    }

    measureSpaceHeight(): number {
        return 0;
    }

    overlays: ViewHandler[] = [];

}

export abstract class LineHandler extends PointHandler {
    protected constructor(lineData: LineData) {
        super(lineData);
        this.points = lineData.points.map(p => new PointHandler({...p, id: randomId(), name: "default name"}))
    }

    points: PointHandler[];

    measureSpaceWidth(): number {
        const maxXPoint = this.points.reduce((p, c) => p.x > c.x ? p : c);
        return maxXPoint.x;
    }

    measureSpaceHeight(): number {
        const maxYPoint = this.points.reduce((p, c) => p.y > c.y ? p : c);
        return maxYPoint.y
    }

}

export abstract class AreaHandler extends LineHandler {
    protected constructor(areaData: AreaData) {
        super(areaData);
        this.shape = areaData.shape
    }

    shape: string;

    abstract measureSpaceWidth(): number

    abstract measureSpaceHeight(): number
}
