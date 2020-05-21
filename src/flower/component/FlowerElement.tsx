import 'mobx-react-lite/batchingForReactDom'
import 'mobx-react-lite/batchingOptOut'
import React, {useState} from "react"
import {ContainerElement} from "./ContainerElement";
import {ArrowElement} from "./ArrowElement";

import "../style.css"
import {useObserver} from "mobx-react";
import {CodeElement} from "./CodeElement";
import {shapeConfigMap} from "../config/";
import {Proxy} from "../store/Proxy";
import {unregisterShapeConfig} from "../config/UnregisterShape";
import {ViewHandler} from "../store/Handler";

type FlowerProps = {
    proxy: Proxy
}


function renderDefs() {
    return <defs>
        <ArrowElement/>
    </defs>

}


function renderElement(shapes: ViewHandler[]) {
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
                {React.createElement(config.area, element)}
            </ContainerElement>
        }
    )
}

function renderOverlay(shapes: ViewHandler[]) {
    return shapes.map(shape => <g id={shape.id} key={shape.id}>
        {shape.overlays.map(overlay => <circle cx={shape.x + overlay.x}
                                               cy={shape.y + overlay.y}
                                               r={10}
                                               id={overlay.id}
                                               key={overlay.id}
                                               fillOpacity={0.1}
                                               stroke={'red'}
                                               pointerEvents={"all"}
                                               strokeWidth={1}
            />
        )}
    </g>)

}


export function FlowerElement(props: FlowerProps) {

    const [moving, setMoving] = useState(false);
    const [debug, setDebug] = useState("")

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
            props.proxy.setActiveElementId(id);
            props.proxy.setActiveOverlayId(element.id);
        }
    };
    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id;
        setDebug(element.toString() + id || "");
        if (id && moving) {
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
            <g className={"debug"}><CodeElement shapes={props.proxy.shapes} message={debug}/></g>
            {renderDefs()}
            <g className={"flow"}>{renderElement(props.proxy.shapes)}</g>
            <g className={"overlay"}>{renderOverlay(props.proxy.shapes)}</g>
        </svg>
    </>)
}
