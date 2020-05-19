import {computed, observable} from "mobx";
import React, {FunctionComponent} from "react";
import {ShapeConfig} from "../config/config";
import {Shape, ShapeData} from "../store/Shape";

const R = 18;

const NAME: string = "Start";

type StartType = ShapeData & {}
type StartProps = ShapeData & {}


class Start extends Shape {
    readonly name: string;

    @observable r: number = R;

    constructor(c: ShapeData) {
        super(c);
        this.name = NAME;
    }

    @computed measureSpaceWidth(): number {
        return this.r * 2;
    }

    @computed measureSpaceHeight(): number {
        return this.r * 2;
    }

    resizeBy(dScale: number): void {
    }

    resizeTo(scale: number): void {
    }

}

const StartElement: FunctionComponent<StartProps> = ({x = 18, y = 18}) => {
    return <circle cy={R}
                   cx={R}
                   r={R}
                   fill={'white'}
                   fillOpacity={0.95}
                   strokeWidth={2}
                   stroke={'black'}/>
}

export const StartShapeConfig: ShapeConfig = {
    element: StartElement,
    name: NAME,
    proxy: Start as Shape
}

