import {computed} from "mobx";
import React, {FunctionComponent} from "react";
import {ShapeConfig} from "../flower/config";
import {LineData, LineHandler, ViewHandler} from "../flower/store/Handler";
import {DEF_ID as MarkerEnd} from "../flower/component/ArrowElement";

const NAME: string = "Flow";

type FlowProps = LineData & {}
type FlowOverlayProps = ViewHandler & {}

class Flow extends LineHandler {

    @computed get overlays(): FlowOverlayProps[] {
        return this.points
    } ;

    set overlays(v) {

    }


}

const FlowElement: FunctionComponent<FlowProps> = ({points}) => {
    const path = points.map(p => `${p.x},${p.y}`);

    return <path d={`m 0,0 L ${path}`}
                 strokeWidth={2}
                 stroke={'black'}
                 fill={'transparent'}
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
                     strokeOpacity={0.3}
    />
};

export const flowShapeConfig: ShapeConfig = {
    element: FlowElement,
    area: FlowArea,
    name: NAME,
    proxyShape: Flow
};

