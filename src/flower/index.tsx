import React, {useState} from "react"
import {ContainerElement} from "./component/ContainerElement";
import {ArrowElement} from "./component/ArrowElement";

import "./style.css"
import {useObserver} from "mobx-react";
import {CodeElement} from "./component/CodeElement";
import {shapeConfigMap, unregisterShapeConfig} from "./config/config";
import {Shape} from "./store/Shape";
import {Proxy} from "./store/Proxy";

type FlowerProps = {
    proxy: Proxy
}


function renderDefs() {
    return <defs>
        <ArrowElement/>
    </defs>

}


function renderElement(shapes: Shape[]) {
    return shapes.map(element => {
            const config = shapeConfigMap.get(element.name) || unregisterShapeConfig;
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
            <CodeElement elements={props.proxy.shapes} />
            {renderDefs()}
            {renderElement(props.proxy.shapes)}
            {renderOverlay()}
        </svg>
    </>)
}
