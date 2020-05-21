import {FunctionComponent} from "react";


export type ShapeConfigMap = Map<string, ShapeConfig>
export type ShapeConfig = {
    name: string;
    element: FunctionComponent<any>;
    area: FunctionComponent<any>;
    handler: any
}

export const shapeConfigMap: ShapeConfigMap = new Map();

export function registerShape(shape: any) {
    shapeConfigMap.set(shape.name, shape);
    console.log(shapeConfigMap)
}
