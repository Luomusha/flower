import {observable} from "mobx";
import React, {FunctionComponent} from "react";
import {ShapeConfig} from "../flower/config";
import {Shape, ShapeData} from "../flower/store/Shape";

const R = 18;

const NAME: string = "Start";

type StartType = ShapeData & {}
type StartProps = ShapeData & {}

class Start extends Shape {
    @observable r: number = R;

    measureSpaceWidth(): number {
        return this.r * 2;
    }

    measureSpaceHeight(): number {
        return this.r * 2;
    }

    overlays = [];
}

const StartElement: FunctionComponent<StartProps> = ({x = 18, y = 18}) => {
    return <circle cy={R}
                   cx={R}
                   r={R}
                   fill={'white'}
                   fillOpacity={0.95}
                   strokeWidth={2}
                   stroke={'black'}/>
};
const StartArea: FunctionComponent<StartProps> = ({x = 18, y = 18}) => {
    return <rect x={0}
                 y={0}
                 width={R * 2}
                 height={R * 2}
                 pointerEvents={"all"}
                 className={"area"}
                 strokeWidth={15}
                 fill={"transparent"}
                 stroke={'transparent'}/>
};

export const startShapeConfig: ShapeConfig = {
    area: StartArea,
    element: StartElement,
    name: NAME,
    proxyShape: Start
};

