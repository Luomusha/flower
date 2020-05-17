import {Element as ElementVM, ElementType} from "../../types";
import {randomId} from "../util";
import {action, computed, observable} from "mobx";

export abstract class Element implements ElementVM {

    readonly id: string;
    abstract readonly name: string;

    @observable x: number = 0;
    @observable y: number = 0;
    @action moveBy = (dx: number, dy: number) => {
        this.x += dx;
        this.y += dy;
    };

    @action moveTo = (x: number, y: number) => {
        this.x = x;
        this.y = y;
    };

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
        this.x = e.x;
        this.y = e.y;
    }


    @observable static activeElementId: string;
    @observable static focusElementId: string;
    @observable static hoverElementId: string;


    @computed get focus() {
        return Element.focusElementId === this.id;
    };


}
