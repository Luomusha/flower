import React, {FunctionComponent} from "react";
import {CircleProps} from "../../types";

export const CircleElement: FunctionComponent<CircleProps> = ({x = 18, y = 18, r = 18}) => {
    return <circle cy={y}
                   cx={x}
                   r={r}
                   fill={'white'}
                   fillOpacity={0.95}
                   strokeWidth={2}
                   stroke={'black'}/>
}
