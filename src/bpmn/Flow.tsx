import {action, computed} from "mobx";
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

    @action moveBy(dx: number, dy: number): void {
        const activeOverlay = this.points.find(p => p.id === ViewHandler.activeOverlayId);
        if (activeOverlay) {
            activeOverlay.x += dx;
            activeOverlay.y += dy;
        } else {
            this.x += dx;
            this.y += dy;
        }
    }

    set overlays(v) {
        console.log("overlays初始化", v)
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
    proxyShape: Flow
};

