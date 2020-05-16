import React, {FunctionComponent} from "react";
import {RectProps} from "../../types";

export const RectElement: FunctionComponent<RectProps> = ({x = 0, y = 0, width = 100, height = 80, radius = 10}) => {
    return <rect y={0}
                 x={0}
                 width={width}
                 height={height}
                 rx={radius}
                 ry={radius}
                 fill={'white'}
                 fillOpacity={0.95}
                 strokeWidth={2}
                 stroke={'black'}/>
}
