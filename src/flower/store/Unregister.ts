import {action, observable} from "mobx";
import {Shape} from "./Shape";

export class Unregister extends Shape {
    readonly name: string;

    constructor() {
        super({
            x: 10,
            y:10
        });
        this.name = "Unregister";
    }

    @observable height: number = 80;
    @observable width: number = 100;

    @action resizeBy(dScale: number) {

    };

    @action resizeTo(scale: number) {

    }

    measureSpaceHeight(): number {
        return 0;
    }

    measureSpaceWidth(): number {
        return 0;
    }


}
