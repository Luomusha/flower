import React from "react";
import {CircleProps} from "../../types";

export abstract class CircleElement extends React.Component<CircleProps, any> {

    render() {
        const {x = 18, y = 18, r = 18} = this.props;
        return <circle cy={y}
                       cx={x}
                       r={r}
                       fill={'white'}
                       fillOpacity={0.95}
                       strokeWidth={2}
                       stroke={'black'}/>
    }
}
