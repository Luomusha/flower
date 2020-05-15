import React from "react"
import {FlowerProps, Link, Shape} from "../types";
import {ContainerElement} from "./element/ContainerElement";
import {RectElement} from "./element/RectElement";
import {LinkElement} from "./element/LinkElement";
import {ArrowElement} from "./element/ArrowElement";
import "./style.css"


function renderDefs() {
    return <defs>
        <ArrowElement/>
    </defs>

}

function renderNodes(shapes: Shape[]) {
    return shapes.map((shape: Shape) => <ContainerElement id={shape.id}
                                                        key={shape.id}
                                                        x={shape.x}
                                                        y={shape.y}
                                                        focus={shape.focus}>
            <text>{shape.focus}</text>
            <RectElement/>
        </ContainerElement>
    )
}

function renderLinks(links: Link[]) {
    return links.map((link: Link) => <ContainerElement id={link.id}
                                                       key={link.id}
                                                       x={link.x}
                                                       y={link.y}
                                                       focus={link.focus}>
        <text>{link.focus}</text>
        <LinkElement x={link.x} y={link.y}/>
    </ContainerElement>)
}

export function Flower(props: FlowerProps) {

    const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id;
        if (id) {
            props.proxy.setFocusElementId(id);
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
    return <svg width={'100%'}
                height={'100%'}
                onClick={handleClick}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
    >
        {renderDefs()}
        {renderNodes(props.proxy.shapes)}
        {renderLinks(props.proxy.links)}
    </svg>
}
