import React, {FunctionComponent} from "react";
import {DEF_ID as MarkerEnd} from "./ArrowElement";
import {LineProps} from "../../types";

export const LineElement: FunctionComponent<LineProps> = () => {
    return <path d={"m 0,0 L10,10"}
                 strokeWidth={2}
                 stroke={'black'}
                 markerEnd={`url(#${MarkerEnd})`}/>
}
