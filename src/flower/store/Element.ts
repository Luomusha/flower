import {Element as ElementVM, ElementType} from "../../types";
import {randomId} from "../util";
import {computed, observable} from "mobx";

export abstract class Element implements ElementVM {

    readonly id: string;
    abstract readonly name: string;

    abstract x: number;
    abstract y: number;
    abstract moveBy: (dx: number, dy: number) => void;
    abstract moveTo: (x: number, y: number) => void;

    abstract measureSpaceHeight(): number;

    abstract measureSpaceWidth(): number;

    @computed get maxX(): number {
        return this.x + this.measureSpaceWidth()
    };

    @computed get maxY(): number {
        return this.y + this.measureSpaceHeight()
    };

    @computed get minX(): number {
        return this.x
    };

    @computed get minY(): number {
        return this.y
    };

    protected constructor(e: ElementType) {
        this.id = e.id || randomId()
    }


    @observable static activeElementId: string;
    @observable static focusElementId: string;
    @observable static hoverElementId: string;


    @computed get focus() {
        return Element.focusElementId === this.id;
    };


}
