import React, {FunctionComponent} from "react";
import {ShapeConfig} from "../flower/config";
import {Data, ViewHandler} from "../flower/store/Handler";

const R = 18;

const NAME: string = "End";

type EndType = Data & {}
type EndProps = Data & {}

class End extends ViewHandler {
}

const EndElement: FunctionComponent<EndProps> = ({x = 18, y = 18}) => {
    return <circle cy={R}
                   cx={R}
                   r={R}
                   fill={'white'}
                   fillOpacity={0.95}
                   strokeWidth={4}
                   stroke={'black'}/>
}


const EndArea: FunctionComponent<EndProps> = ({x = 18, y = 18}) => {
    return <rect x={0}
                 y={0}
                 width={R * 2}
                 height={R * 2}
                 pointerEvents={"all"}
                 className={"area"}
                 strokeWidth={15}
                 fill={"transparent"}
                 stroke={'transparent'}
    />
}

export const endShapeConfig: ShapeConfig = {
    area: EndArea,
    element: EndElement,
    name: NAME,
    handler: End
}

