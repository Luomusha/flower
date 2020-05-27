import React, {FunctionComponent} from "react";
import {useObserver} from "mobx-react";
import {ViewProps} from "../store/Handler";

export type ContainerProps = ViewProps
export const ContainerElement: FunctionComponent<ContainerProps> = (props) => {

    return useObserver(() => <g transform={`matrix(1 0 0 1 ${props.position.vx} ${props.position.vy})`}
                                id={props.id}
                                key={props.id}
        >

            <text x={props.minX} y={props.minY}>{props.shape}</text>
            {props.children}
        <rect x={props.minX - 6} y={props.minY - 6}
              width={props.spaceWidth + 6 + 6}
              height={props.spaceHeight + 6 + 6}
              strokeWidth={1}
              shapeRendering={"crispEdges"}
              strokeDasharray={3}
              stroke={props.focus ? 'black' : undefined}
              pointerEvents={"none"}
              fill={'transparent'}>
        </rect>
        </g>
    )
};
