/******************************* Model ************************************/
export type Clazz = { id?: string; name: string }
export type Position = { x: number; y: number; }
export type RectType = Clazz & Position & { radius?: number; width: number; height: number };
export type CircleType = Clazz & Position & { r?: number; }
export type ShapeType = RectType | CircleType;
export type LineType = Clazz & Position ;
export type ElementType = ShapeType | LineType;
export type InitData = ElementType[];

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
}

export interface Shape extends Element, Scalable {
}

export interface Line extends Element {
    startElementId?: string;
    endElementId?: string;
    points: Position[];
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
export type ContainerProps = { focus: boolean } & ElementType & Position
export type RectProps = RectType
export type CircleProps = CircleType
export type LineProps = {}

export type FlowerProps = { proxy: Proxy; }

/******************************* View ************************************/

