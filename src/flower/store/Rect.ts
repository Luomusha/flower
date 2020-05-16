import {Shape} from "./Shape";
import {RectType} from "../../types";

export class Rect extends Shape {
    readonly name: string;

    constructor(rect: RectType) {
        super(rect);
        this.name = rect.name;
    }

}
