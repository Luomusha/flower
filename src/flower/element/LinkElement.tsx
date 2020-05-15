import React from "react";
import {DEF_ID as MarkerEnd} from "./ArrowElemen";

export abstract class LinkElement extends React.Component<any, any> {
    render() {
        return <path d={"m 0,0 L10,10"}
                     strokeWidth={2}
                     stroke={'black'}
                     markerEnd={`url(#${MarkerEnd})`}/>
    }
}
