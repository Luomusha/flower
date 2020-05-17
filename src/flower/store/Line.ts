import {Line as LineVM, LineType, Point} from "../../types"
import {Element} from "./Element"
import {action} from "mobx";

export abstract class Line extends Element implements LineVM {
    endElementId?: string;
    startElementId?: string;
    points: Point[] = [];
    x: number = 0;
    y: number = 0;

    protected constructor(line: LineType) {
        super(line);
        this.x = line.x;
        this.y = line.y;
    }

    @action moveBy = (dx: number, dy: number) => {
        this.x += dx;
        this.y += dy;
    };
    @action moveTo = (x: number, y: number) => {
        this.x = x;
        this.y = y;
    };

}
