import {action} from "mobx";
import {Shape} from "./Shape";

export type UnregisterType = {
    x: number;
    y: number;
    name: string;
}

export class Unregister extends Shape {

    @action resizeBy(dScale: number) {

    };

    @action resizeTo(scale: number) {

    }

    measureSpaceHeight(): number {
        return 50;
    }

    measureSpaceWidth(): number {
        return 80;
    }

    overlays: Shape[] = [];


}
