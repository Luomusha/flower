import {FlowerElement as Flower} from "./component/FlowerElement"
import {registerShape} from "./config"
import {startShapeConfig} from "../bpmn/Start";
import {taskShapeConfig} from "../bpmn/Task";
import {endShapeConfig} from "../bpmn/End";
import {flowShapeConfig} from "../bpmn/Flow";

registerShape(startShapeConfig);
registerShape(taskShapeConfig);
registerShape(endShapeConfig);
registerShape(flowShapeConfig);

export {Flower, registerShape}
