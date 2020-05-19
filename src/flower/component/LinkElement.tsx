import React, {FunctionComponent} from "react";
import {DEF_ID as MarkerEnd} from "./ArrowElement";

export type LineProps = {
    points: {
        x: number;
        y: number;
    }[]
}

export const LinkElement: FunctionComponent<LineProps> = ({points}) => {
    const path = points.map(p => `${p.x},${p.y}`);
    return <path d={`m 0,0 L ${path}`}
                 strokeWidth={2}
                 stroke={'black'}
                 fill={'transparent'}
                 markerEnd={`url(#${MarkerEnd})`}/>
};
