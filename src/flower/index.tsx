import React from "react"
import {FlowerProps, Shape} from "../types";
import {ContainerElement} from "./component/ContainerElement";
import {ArrowElement} from "./component/ArrowElement";
import "./style.css"
import {useObserver} from "mobx-react";


function renderDefs() {
    return <defs>
        <ArrowElement/>
    </defs>

}

function renderElement(shapes: Shape[]) {
    return shapes.map((shape: Shape) => <ContainerElement id={shape.id}
                                                          key={shape.id}
                                                          x={shape.x}
                                                          y={shape.y}
                                                          focus={shape.focus}>
            <text>{shape.focus}</text>
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
        <div>{JSON.stringify(props.proxy.shapes)}</div>
        <svg width={'100%'}
             height={'100%'}
             onClick={handleClick}
             onMouseDown={handleMouseDown}
             onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp}
        >
            {renderDefs()}
            {renderElement(props.proxy.shapes)}
        </svg>
    </>)
}
