import {CircleType} from "../../types"
import {Shape} from "./Shape";

export class Circle extends Shape {
    readonly name: string;

    constructor(c: CircleType) {
        super(c);
        this.name = c.name;
    }

}
