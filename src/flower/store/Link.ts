import {Line as LineVM, LineType, Point} from "../../types"
import {Line} from "./Line";
import {observable} from "mobx";

export class Link extends Line implements LineVM {
    readonly name: string;
    endElementId?: string;
    startElementId?: string;
    @observable points: Point[] = [];

    constructor(link: LineType) {
        super(link);
        this.name = link.name;
        this.points = link.points.slice();
    }

    measureSpaceWidth(): number {
        const maxXPoint = this.points.reduce(((previousValue, currentValue) =>
            previousValue.x > currentValue.x ? previousValue : currentValue));
        return maxXPoint.x;
    }
    measureSpaceHeight(): number {
        const maxYPoint = this.points.reduce(((previousValue, currentValue) =>
            previousValue.y > currentValue.y ? previousValue : currentValue));
        return maxYPoint.y;
    }
}
