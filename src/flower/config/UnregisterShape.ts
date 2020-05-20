import {Unregister} from "../store/Unregister";
import {registerShape, ShapeConfig} from "./";
import {UnregisterElement} from "../component/UnregisterElement";


export const NAME = "Unregister";
export const unregisterShapeConfig: ShapeConfig = {
    name: NAME,
    element: UnregisterElement,
    area: UnregisterElement,
    proxyShape: Unregister
};
registerShape(unregisterShapeConfig);
