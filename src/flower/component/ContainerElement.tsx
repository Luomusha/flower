import React, {FunctionComponent} from "react";
import {useObserver} from "mobx-react";


export type ContainerProps = {
    id: string;
    name: string;
    positionX: number;
    positionY: number;
    width?: number;
    height?: number;
    focus?: boolean;
    margin?: number;
}

export const ContainerElement: FunctionComponent<ContainerProps> = ({
                                                                        children,
                                                                        positionX,
                                                                        positionY,
                                                                        width = 100,
                                                                        height = 80,
                                                                        id,
                                                                        name,
                                                                        focus,
                                                                        margin = 6,
                                                                    }) => {

    return useObserver(() => <g transform={`matrix(1 0 0 1 ${positionX} ${positionY})`}
                                id={id}
                                key={id}
        >

        <text>{name}</text>
            {children}
            <rect x={-6} y={-6}
                  width={width + margin + margin}
                  height={height + margin + margin}
                  strokeWidth={1}
                  shapeRendering={"crispEdges"}
                  strokeDasharray={3}
                  stroke={focus ? 'black' : undefined}
                  pointerEvents={"none"}
                  fill={'transparent'}>
            </rect>
        </g>
    )
};
