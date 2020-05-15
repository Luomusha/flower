import React from "react";
import {ShapeType} from "../../types";

export abstract class ContainerElement extends React.Component<ShapeType, any> {
    render() {
        const {children, x, y, id, focus = false} = this.props;
        return <g transform={`matrix(1 0 0 1 ${x} ${y})`}
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
    }
}
