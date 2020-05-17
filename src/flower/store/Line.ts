import {Line as LineVM, LineType, Point} from "../../types"
import {Element} from "./Element"
import {action, observable} from "mobx";

export abstract class Line extends Element implements LineVM {
    endElementId?: string;
    startElementId?: string;
    @observable points: Point[] = [];

    protected constructor(line: LineType) {
        super(line);

        this.points = line.points.slice();
    }


}
