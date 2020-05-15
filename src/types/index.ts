/******************************* Model ************************************/
export type Position = { x: number; y: number; }
export type Size = { width: number; height: number; }
export type ElementType = { id?: string; }
export type RectType = { radius?: number; } & ElementType & Position & Size;
export type CircleType = { id?: string; r?: number; } & Position;
export type ShapeType = RectType | CircleType;
export type LinkType = { id?: string } & Position;
export type InitData = {
    shapes: ShapeType[],
    links: LinkType[]
}

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

export interface Element {
    readonly id: string;
}

export interface Shape extends Element, Movable, Scalable {
}

export interface Link extends Element {
    startElementId?: string;
    endElementId?: string;
    points: Position[];
}

export interface Proxy {
    shapes: Shape[];
    links: Link[];
    initData: (data: InitData) => void;
    setActiveElementId: (id: string) => void;
    setFocusElementId: (id: string) => void;
    setHoverElementId: (id: string) => void;
    proxyMoveToActiveElement: (x:number,y:number) => void;
    proxyMoveByActiveElement: (dx:number,dy:number) => void;
    proxyResizeActiveElement: (id: string) => void;
}

/******************************* View ************************************/
export type RectProps = {focus:boolean} & RectType
export type CircleProps = {focus:boolean} & CircleType
export type FlowerProps = { proxy: Proxy; }

/******************************* View ************************************/

