import 'mobx-react-lite/batchingForReactDom'
import 'mobx-react-lite/batchingOptOut'
import React, {useState} from "react"
import {ContainerElement} from "./ContainerElement";
import {ArrowElement} from "./ArrowElement";

import "../style.css"
import {useObserver} from "mobx-react";
import {CodeElement} from "./CodeElement";
import {shapeConfigMap} from "../config/";
import {Shape} from "../store/Shape";
import {Proxy} from "../store/Proxy";
import {unregisterShapeConfig} from "../config/UnregisterShape";

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
                {React.createElement(config.area, element)}
            </ContainerElement>
        }
    )
}

function renderOverlay(shapes: Shape[]) {
    return shapes.map(shape => {
        return shape.overlays.length > 0 && <g>
          <g>
              {shape.overlays.map(overlay => <circle cx={overlay.x}
                                                     cy={overlay.y}
                                                     r={5}
                                                     fillOpacity={0.3}
                                                     stroke={'red'}
                                                     strokeWidth={1}
                  />
              )}
          </g>
        </g>
    })
}

export function FlowerElement(props: FlowerProps) {

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
            props.proxy.setActiveElementId(id);
        }
    };
    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id;
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
            <CodeElement shapes={props.proxy.shapes}/>
            {renderDefs()}
            {renderElement(props.proxy.shapes)}
            {renderOverlay(props.proxy.shapes)}
        </svg>
    </>)
}
