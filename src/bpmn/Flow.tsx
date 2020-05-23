import React, {FunctionComponent} from "react";
import {ShapeConfig} from "../flower/config";
import {Connector, Data, ViewHandler} from "../flower/store/Handler";
import {DEF_ID as MarkerEnd} from "../flower/component/ArrowElement";

const NAME: string = "Flow";

type FlowProps = Data & {}
type FlowOverlayProps = ViewHandler & {}

class Flow extends ViewHandler implements Connector {
    sourceRef?: string;
    targetRef?: string;

    setTargetRef(id: string): void {
        this.targetRef = id
    }

    setSourceRef(id: string): void {
        this.sourceRef = id
    }

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

