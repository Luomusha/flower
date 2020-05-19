import React, {FunctionComponent} from "react";
import {ShapeData} from "../store/Shape";

export type CodeProps = {
    shape: ShapeData[]
}

export const CodeElement: FunctionComponent<CodeProps> = ({shape}) => {
    return <g>
        {shape.map((e, index: number) =>
            <text x={5} y={300 + 15 * index}
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
