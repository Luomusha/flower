export type Param = {
    x?: number;
    y?: number;
    dx?: number;
    dy?: number;
    width?: number;
    height?: number;
}


export interface Element {
    id?: string;
    x: number;
    y: number;
    active?: boolean;
    focus?: boolean;
    hover?: boolean;
}


export interface Shape extends Element {

}

export interface Link extends Element {

}

export type Data = {
    nodes: Shape[],
    links: Link[]
}

export type FlowerProps = {
    actionProxy: ActionProxy
}

export interface ActionProxy {
    nodes: Shape[];
    links: Link[];
    initData: (data: Data) => void;
    updateActiveElement: (param: Param) => void;
    setActiveElementId: (id: string) => void;
    setFocusElementId: (id: string) => void;
    setHoverElementId: (id: string) => void;
}


export interface Rect {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    radius?: number;
}

export interface Circle {
    x?: number;
    y?: number;
    r?: number;
}


