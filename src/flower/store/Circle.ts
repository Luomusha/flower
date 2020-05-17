import {Shape} from "./Shape";
import {observable} from "mobx";
import {ShapeType} from "../../types";

export class Circle extends Shape {
    readonly name: string;
    @observable x: number = 0;
    @observable y: number = 0;
    @observable r: number = 18;

    constructor(c: ShapeType) {
        super(c);
        this.name = c.name;
    }

    measureSpaceWidth(): number {
        return this.r * 2;
    }

    measureSpaceHeight(): number {
        return this.r * 2;
    }

}
