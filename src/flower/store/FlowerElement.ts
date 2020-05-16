import {FlowerElement as ElementVM, ElementType} from "../../types";
import {randomId} from "../util";
import {computed, observable} from "mobx";

export abstract class FlowerElement implements ElementVM {

    readonly id: string;

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
        console.log("focus called:", FlowerElement.focusElementId, this.id);
        return FlowerElement.focusElementId === this.id;
    };


}
