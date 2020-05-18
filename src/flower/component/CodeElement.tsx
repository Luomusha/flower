import React, {FunctionComponent} from "react";
import {CodeProps} from "../../types";

export const CodeElement: FunctionComponent<CodeProps> = ({code}) => {
    return <g>
        {code.split('},{').map((c: string, index: number) =>
            <text x={0} y={20+ 20 * index} stroke={'darkgreen'}>
                <tspan stroke={'yellow'}>{index}</tspan>
                <tspan x={30}>{'\{'}{c}{'\'},'}</tspan>
            </text>
        )}

    </g>
}
