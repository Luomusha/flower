import React, {FunctionComponent} from "react";
import {ShapeConfig} from "../flower/config";
import {Data, ViewHandler} from "../flower/store/Handler";
import {DEF_ID as MarkerEnd} from "../flower/component/ArrowElement";
import {computed} from "mobx";
import {randomId} from "../flower/util";

const NAME: string = "Flow";

type FlowProps = Data & {}
type FlowOverlayProps = ViewHandler & {}

class Flow extends ViewHandler {
    // @computed get overlays() {
    //     //     return this.points.map(p => ({id:randomId(),shape:"Point"}))
    //     // };
 }

const FlowElement: FunctionComponent<FlowProps> = ({points}) => {
    const path = points.map(p => `${p.x},${p.y}`);

    return <path d={`m ${points[0].x},${points[0].y} L ${path}`}
                 strokeWidth={2}
                 stroke={'black'}
                 fill={'none'}
                 markerEnd={`url(#${MarkerEnd})`}/>
};
const FlowArea: FunctionComponent<FlowProps> = ({points}) => {
    const path = points.map(p => `${p.x},${p.y}`);

    return <polyline points={path.join(" ")}
                     strokeWidth={15}
                     stroke={'black'}
                     fill={"none"}
                     pointerEvents={"stroke"}
                     className={"area"}
                     strokeOpacity={0.1}
    />
};

export const flowShapeConfig: ShapeConfig = {
    element: FlowElement,
    area: FlowArea,
    name: NAME,
    handler: Flow
};

