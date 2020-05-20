import React, {FunctionComponent} from "react";
import {ShapeConfig} from "../flower/config";
import {AreaData, AreaHandler} from "../flower/store/Handler";

const R = 18;

const NAME: string = "Start";

type StartType = AreaData & {}
type StartProps = AreaData & {}

class Start extends AreaHandler {
    constructor(start: StartType) {
        super({...start, points: [{x: R, y: R}]});
    }


    measureSpaceWidth(): number {
        return this.points[0].x * 2;
    }

    measureSpaceHeight(): number {
        return this.points[0].y * 2;
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

