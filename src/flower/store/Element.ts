import {computed, observable} from "mobx";
import {randomId} from "../util";
import {Element as ElementType} from "../../types";

export abstract class Element implements ElementType {
    readonly id: string;
    @observable x: number = 0;
    @observable y: number = 0;

    @observable static hoverElementId: undefined | string;
    @observable static activeElementId: string;
    @observable static focusElementId: string;

    @computed get hover(): boolean {
        return Element.hoverElementId === this.id;
    }

    @computed get active(): boolean {
        return Element.activeElementId === this.id;
    }

    @computed get focus(): boolean {
        return Element.focusElementId === this.id;
    }

    constructor(element: ElementType) {
        this.id = element.id || randomId();
        this.x = element.x;
        this.y = element.y;
    }

}
