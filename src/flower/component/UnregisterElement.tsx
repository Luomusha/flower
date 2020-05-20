import React, {FunctionComponent} from "react";

export type UnregisterProps = {}

export const UnregisterElement: FunctionComponent<UnregisterProps> = () => {

    return <text>
        <tspan y={20}>Unregister</tspan>
        <tspan y={30} x={0}>Element</tspan>
    </text>


}
