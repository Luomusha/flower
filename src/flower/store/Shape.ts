import {Shape as ShapeVM, ShapeType} from "../../types"
import {observable} from "mobx";
import {Element} from "./Element"

export class Shape extends Element implements ShapeVM {

    @observable x: number = 0;
    @observable y: number = 0;
    @observable scale: number = 1;

    constructor(shape: ShapeType) {
        super(shape);
        this.x = shape.x;
        this.y = shape.y;
    }

    moveBy = (dx: number, dy: number) => {
        this.x += dx;
        this.y += dy;
    };

    moveTo = (x: number, y: number) => {
        this.x = x;
        this.y = y;
    };

    resizeBy(dScale: number) {
        this.scale *= dScale;
    };

    resizeTo(scale: number) {
        this.scale = scale;
    };

}
