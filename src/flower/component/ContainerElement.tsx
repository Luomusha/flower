import React, {Children, FunctionComponent, ReactElement} from "react";
import {useObserver} from "mobx-react";
import {shapeConfigMap, unregisterShapeConfig} from "../config/config";



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
    let config = unregisterShapeConfig;
    Children.forEach(children, function (child) {
        if (['boolean', 'undefined', 'string', 'number'].includes(typeof child) || child === null) {
            return child
        }
        if (child) {
            const c = child as ReactElement;
            if (c.props?.name) {
                config = shapeConfigMap.get(c.props.name) || unregisterShapeConfig
            }
        }
    });

    return useObserver(() => <g transform={`matrix(1 0 0 1 ${positionX} ${positionY})`}
                                id={id}
        >

            {children}
            {React.createElement("text", undefined, `${name}`)}

            <rect x={-6} y={-6}
                  width={width + margin + margin}
                  height={height + margin + margin}
                  strokeWidth={1}
                  shapeRendering={"crispEdges"}
                  strokeDasharray={3}
                  stroke={focus ? 'black' : undefined}
                  fill={'transparent'}>
            </rect>
        </g>
    )
};
