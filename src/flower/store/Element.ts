import {Element as ElementVM, ElementType} from "../../types";
import {randomId} from "../util";
import {computed, observable} from "mobx";

export abstract class Element implements ElementVM {

    readonly id: string;
    abstract readonly name: string;

    abstract moveBy: (dx: number, dy: number) => void;
    abstract moveTo: (x: number, y: number) => void;
    abstract x: number;
    abstract y: number;

    @observable static activeElementId: string;
    @observable static focusElementId: string;
    @observable static hoverElementId: string;

    protected constructor(e: ElementType) {
        this.id = e.id || randomId()
    }

    @computed get focus() {
        return Element.focusElementId === this.id;
    };


}
