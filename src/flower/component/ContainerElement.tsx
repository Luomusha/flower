import React, {FunctionComponent} from "react";
import {ContainerProps} from "../../types";
import {useObserver} from "mobx-react";

export const ContainerElement: FunctionComponent<ContainerProps> = ({children, x, y, id, focus}) => {
    return useObserver(() => <g transform={`matrix(1 0 0 1 ${x} ${y})`}
                            id={id}
        >

            {children}
            <rect x={-6} y={-6}
                  width={112} height={96}
                  strokeWidth={1}
                  shapeRendering={"crispEdges"}
                  strokeDasharray={3}
                  stroke={focus ? 'black' : undefined}
                  fill={'transparent'}>
            </rect>
        </g>
    )

}
