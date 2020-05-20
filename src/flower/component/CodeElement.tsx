import React, {FunctionComponent} from "react";
import {randomId} from "../util";

export type CodeProps = {
    shapes: any[]
}

export const CodeElement: FunctionComponent<CodeProps> = ({shapes}) => {
    return <g>
        {shapes.map((e, index: number) =>
            <text x={5} y={300 + 15 * index}
                  key={randomId()}
                  stroke={'darkgreen'}
                  fontFamily={'San'}
                  fontSize={11} fontWeight={'lighter'}
                  shapeRendering={'crispEdges'}>
                <tspan stroke={'black'}>{index + 1}</tspan>
                <tspan x={20}>{JSON.stringify(e)}</tspan>
            </text>
        )}

    </g>
}
