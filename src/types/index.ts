import {FunctionComponent} from "react";

/******************************* Model ************************************/
export type ShapeType = { id?: string; name: string; x: number; y: number; }
export type LineType = { id?: string; name: string; x: number; y: number; points: Point[]; }
export type ElementType = ShapeType | LineType
export type InitData = ElementType[];

export type Point = { x: number; y: number; }
export type Vector = { vx: number; vy: number; }

/******************************* ModelView ************************************/
export interface Movable {
    x: number;
    y: number;
    moveTo: (x: number, y: number) => void;
    moveBy: (dx: number, dy: number) => void;
}

export interface Scalable {

    scale: number;
    resizeTo: (scale: number) => void;
    resizeBy: (dScale: number) => void;
}

export interface Element extends Movable {
    readonly id: string;
    readonly name: string;
    focus: boolean;
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
    measureSpaceHeight: () => number;
    measureSpaceWidth: () => number;
}

export interface Shape extends Element, Scalable {
}

export interface Line extends Element {
    startElementId?: string;
    endElementId?: string;
    points: Point[];
}

export interface Proxy {
    elements: Element[];
    initData: (data: InitData) => void;
    setActiveElementId: (id: string) => void;
    setFocusElementId: (id: string) => void;
    setHoverElementId: (id: string) => void;
    proxyMoveToActiveElement: (x: number, y: number) => void;
    proxyMoveByActiveElement: (dx: number, dy: number) => void;
    proxyResizeActiveElement: (id: string) => void;
}

/******************************* View ************************************/
export type ContainerProps = {
    id: string;
    name: string;
    positionX: number;
    positionY: number;
    width?: number;
    height?: number;
    focus?: boolean;
    margin?: number;
}
export type RectProps = { x: number; y: number; }
export type CircleProps = { x: number; y: number; }


export type LineProps = { points: Point[] }
export type CodeProps = { code: string }


export type FlowerProps = { proxy: Proxy; }
/******************************* ViewConfig ************************************/
export type ElementConfigMap = Map<string, ElementConfig>
export type ElementConfig = { name: string; element: FunctionComponent<any>; }

