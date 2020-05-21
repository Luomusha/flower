import React, {FunctionComponent} from "react";
import {ShapeConfig} from "../flower/config";
import {Data, ViewHandler} from "../flower/store/Handler";

const NAME: string = "Task";

type TaskType = Data & {}
type TaskProps = Data & {}

class Task extends ViewHandler {
    constructor(task: TaskType) {
        super(task);
        this.points.push({x: 100, y: 80})
    }

    overlays = [];

}

const TaskElement: FunctionComponent<TaskProps> = () => {
    return <rect height={80}
                 width={100}
                 rx={10}
                 ry={10}
                 fill={'white'}
                 fillOpacity={0.95}
                 strokeWidth={2}
                 stroke={'black'}/>
}
const TaskArea: FunctionComponent<TaskProps> = () => {
    return <rect x={0}
                 y={0}
                 height={80}
                 width={100}
                 fill={'transparent'}
                 stroke={"transparent"}
                 className={'area'}
                 pointerEvents={"all"}
                 strokeWidth={15}
    />
};

export const taskShapeConfig: ShapeConfig = {
    element: TaskElement,
    area: TaskArea,
    name: NAME,
    handler: Task
}

