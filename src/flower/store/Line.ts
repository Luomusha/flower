import {Line as LineVM, LineType, Position} from "../../types"
import {Element} from "./Element"

export abstract class Line extends Element implements LineVM {
    endElementId?: string;
    startElementId?: string;
    points: Position[] = [];
    x: number = 0;
    y: number = 0;

    protected constructor(Line: LineType) {
        super(Line);
        this.x = Line.x;
        this.y = Line.y;
    }

    moveBy = (dx: number, dy: number) => {
    };
    moveTo = (x: number, y: number) => {
    };

}
