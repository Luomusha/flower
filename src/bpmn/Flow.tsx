import {computed, observable} from "mobx";
import React, {FunctionComponent} from "react";
import {ShapeConfig} from "../flower/config";
import {Shape, ShapeData} from "../flower/store/Shape";
import {DEF_ID as MarkerEnd} from "../flower/component/ArrowElement";
import {Point} from "../types";

const NAME: string = "Flow";

type FlowData = ShapeData & {
    points: {
        x: number;
        y: number;
    }[]
}
type FlowProps = ShapeData & {
    points: {
        x: number;
        y: number;
    }[]
}
type FlowOverlayProps = ShapeData & {}

class Flow extends Shape {
    constructor(data: FlowData) {
        super(data);
        this.points = data.points
    }

    @observable points: Point[] = [];

    @computed get overlays(): FlowOverlayProps[] {
        return this.points.map(p => ({
            x: this.x + p.x,
            y: this.y + p.y, name: "Point"
        }))
    } ;

    set overlays(v) {

    }

    measureSpaceWidth(): number {
        const maxXPoint = this.points.reduce((p, c) => p.x > c.x ? p : c);
        return maxXPoint.x;
    }

    measureSpaceHeight(): number {
        const maxYPoint = this.points.reduce((p, c) => p.y > c.y ? p : c);
        return maxYPoint.y
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

