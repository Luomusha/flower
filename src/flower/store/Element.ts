import {Element as ElementVM, ElementType} from "../../types";
import {randomId} from "../util";

export class Element implements ElementVM {

    readonly id: string;

    constructor(element: ElementType) {
        this.id = element.id || randomId()
    }

}
