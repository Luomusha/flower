import {observable} from "mobx";
import React, {FunctionComponent} from "react";
import {ShapeConfig} from "../flower/config";
import {Shape, ShapeData} from "../flower/store/Shape";

const NAME: string = "Task";

type TaskType = ShapeData & {}
type TaskProps = ShapeData & {}

class Task extends Shape {
    @observable width: number = 100;
    @observable height: number = 80;

    measureSpaceWidth(): number {
        return this.width;
    }

    measureSpaceHeight(): number {
        return this.height;
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

