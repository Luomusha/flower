import {Shape as ShapeVM, ShapeType} from "../../types"
import {observable} from "mobx";
import {Element} from "./Element"

export abstract class Shape extends Element implements ShapeVM {

    @observable scale: number = 1;

    protected constructor(shape: ShapeType) {
        super(shape);
    }



    resizeBy(dScale: number) {
        this.scale *= dScale;
    };

    resizeTo(scale: number) {
        this.scale = scale;
    };

}
