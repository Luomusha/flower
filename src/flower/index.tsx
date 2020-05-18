import React, {useState} from "react"
import {Element, FlowerProps} from "../types";
import {ContainerElement} from "./component/ContainerElement";
import {ArrowElement} from "./component/ArrowElement";

import "./style.css"
import {useObserver} from "mobx-react";
import {elementConfigMap, unregisterElementConfig} from "./config";
import {CodeElement} from "./component/CodeElement";


function renderDefs() {
    return <defs>
        <ArrowElement/>
    </defs>

}


function renderElement(elements: Element[]) {
    return elements.map(element => {
            const config = elementConfigMap.get(element.name) || unregisterElementConfig;
            return <ContainerElement id={element.id}
                                     key={element.id}
                                     positionX={element.x}
                                     positionY={element.y}
                                     width={element.maxX - element.minX}
                                     height={element.maxY - element.minY}
                                     name={element.name}
                                     focus={element.focus}>
                {React.createElement(config.element, element)}
            </ContainerElement>
        }
    )
}

function renderOverlay(){
    return
}

export function Flower(props: FlowerProps) {

    const [moving, setMoving] = useState(false);

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
            setMoving(true);
            console.log(id)
            props.proxy.setActiveElementId(id);
        }
    };
    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id;
        if (id && moving) {
            console.log(id);
            props.proxy.proxyMoveByActiveElement(e.movementX, e.movementY)
        }
    };
    const handleMouseUp = (e: React.MouseEvent<SVGSVGElement>) => {
        setMoving(false);
        props.proxy.setActiveElementId("root");
    };
    return useObserver(() => <>
        <svg width={'100%'}
             height={'100%'}
             onClick={handleClick}
             onMouseDown={handleMouseDown}
             onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp}
        >
            <CodeElement code={JSON.stringify(props.proxy.elements)} />
            {renderDefs()}
            {renderElement(props.proxy.elements)}
            {renderOverlay()}
        </svg>
    </>)
}
