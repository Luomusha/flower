import {RectElement} from "../component/RectElement";
import {FunctionComponent} from "react";
import {Unregister} from "../store/Unregister";
import {Shape} from "../store/Shape";

export type ShapeConfigMap = Map<string, ShapeConfig>
export type ShapeConfig = {
    name: string;
    element: FunctionComponent<any>;
    proxy: Shape
}

export const unregisterShapeConfig: ShapeConfig = {
    name: "Unregister",
    element: RectElement,
    proxy: new Unregister()
};

export const shapeConfigMap: ShapeConfigMap = new Map();
shapeConfigMap.set(unregisterShapeConfig.name, unregisterShapeConfig);
