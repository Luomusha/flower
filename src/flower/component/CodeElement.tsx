import React, {FunctionComponent} from "react";
import {randomId} from "../util";
import {ViewHandler} from "../store/Handler";
import {useObserver} from "mobx-react";

export type CodeProps = {
    shapes: any[],
    message: string
}

export const CodeElement: FunctionComponent<CodeProps> = ({shapes, message}) => {
    return useObserver(() => <g>
        <text y={300}
              x={200}
              stroke={'darkgreen'}
              fontFamily={'San'}
              fontSize={11} fontWeight={'lighter'}
              shapeRendering={'crispEdges'}>
            {message}
        </text>
        <text y={300}
              stroke={'darkgreen'}
              fontFamily={'San'}
              fontSize={11} fontWeight={'lighter'}
              shapeRendering={'crispEdges'}>
            activeElementId:{ViewHandler.activeElementId}
        </text>
        {shapes.map((e, index: number) =>
            <text x={5} y={320 + 15 * index}
                  key={randomId()}
                  stroke={'darkgreen'}
                  fontFamily={'San'}
                  fontSize={11} fontWeight={'lighter'}
                  shapeRendering={'crispEdges'}>
                <tspan stroke={'black'}>{index + 1}</tspan>
                <tspan x={20}>{JSON.stringify(e)}</tspan>
            </text>
        )}

    </g>)
}
