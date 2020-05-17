import {Shape} from "./Shape";
import {ShapeType} from "../../types";
import {observable} from "mobx";

export class Rect extends Shape {
    readonly name: string;

    constructor(rect: ShapeType) {
        super(rect);
        this.name = rect.name;
    }

    @observable height: number = 80;
    @observable width: number = 100;

    measureSpaceWidth(): number {
        return this.width;
    }

    measureSpaceHeight(): number {
        return this.height;
    }

}
