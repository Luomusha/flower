import React, {FunctionComponent} from "react";

export const DEF_ID = 'ARROW_MARKER';
export const ArrowElement: FunctionComponent = () => {
    return <marker id={DEF_ID} viewBox="0 0 10 10" refX="9" refY="5"
                   markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z"/>
    </marker>
}
