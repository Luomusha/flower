import React, {FunctionComponent, FunctionComponentElement} from "react"
import {Element, FlowerProps} from "../types";
import {ContainerElement} from "./component/ContainerElement";
import {ArrowElement} from "./component/ArrowElement";

import "./style.css"
import {useObserver} from "mobx-react";
import {CircleElement} from "./component/CircleElement";
import {RectElement} from "./component/RectElement";
import {ReactComponent} from "*.svg";


function renderDefs() {
    return <defs>
        <ArrowElement/>
    </defs>

}

type ElementMap<T> = {
    [key:string]:T
}
const elMp:ElementMap<FunctionComponent<any>> = {
    "Circle": CircleElement,
    "Rect": RectElement,
}

function renderElement(elements: Element[]) {
    return elements.map(element => <ContainerElement id={element.id}
                                                     key={element.id}
                                                     x={element.x}
                                                     y={element.y}
                                                     name={element.name}
                                                     focus={element.focus}>
            {React.createElement(elMp[element.name], element)}
            {React.createElement("text", undefined, `${element.name}Element`)}
        </ContainerElement>
    )
}

export function Flower(props: FlowerProps) {

    const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id;
        if (id) {
            props.proxy.setFocusElementId(id);
            props.proxy.proxyMoveByActiveElement(10, 0)
        }
    };
    const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id;
        if (id) {
            props.proxy.setActiveElementId(id);
        }
    };
    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id;
        if (id) {
            props.proxy.proxyMoveByActiveElement(e.movementX, e.movementY)
        }
    };
    const handleMouseUp = (e: React.MouseEvent<SVGSVGElement>) => {
        props.proxy.setActiveElementId("root");
    };
    return useObserver(() => <>
        <div>{JSON.stringify(props.proxy.elements)}</div>
        <svg width={'100%'}
             height={'100%'}
             onClick={handleClick}
             onMouseDown={handleMouseDown}
             onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp}
        >
            {renderDefs()}
            {renderElement(props.proxy.elements)}
        </svg>
    </>)
}
