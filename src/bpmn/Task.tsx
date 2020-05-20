import React, {FunctionComponent} from "react";
import {ShapeConfig} from "../flower/config";
import {AreaData, AreaHandler} from "../flower/store/Handler";

const NAME: string = "Task";

type TaskType = AreaData & {}
type TaskProps = AreaData & {}

class Task extends AreaHandler {
    constructor(task: TaskType) {
        super({...task, points: [{x: 100, y: 80}]});
    }


    measureSpaceWidth(): number {
        return this.points[0].x;
    }

    measureSpaceHeight(): number {
        return this.points[0].y;
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
}

export const taskShapeConfig: ShapeConfig = {
    element: TaskElement,
    area: TaskArea,
    name: NAME,
    proxyShape: Task
}

