import {Line as LineVM, LineType} from "../../types"
import {Line} from "./Line";

export class Link extends Line implements LineVM {
    readonly name: string;
    endElementId?: string;
    startElementId?: string;

    constructor(link: LineType) {
        super(link);
        this.name = link.name;
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
