import React from "react"
import {useObserver} from "mobx-react";
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

function renderNodes(nodes: Shape[]) {
    return nodes.map((node: Shape) => <ContainerElement id={node.id}
                                                        key={node.id}
                                                        x={node.x}
                                                        y={node.y}
                                                        focus={node.focus}>
            <text>1{node.focus}2</text>
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
        <text>1{link.focus}2</text>
        <LinkElement x={link.x} y={link.y}/>
    </ContainerElement>)
}

export function Flower(props: FlowerProps) {

    const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id;
        if (id) {
            props.actionProxy.setFocusElementId(id);
        }
    };
    const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id;
        if (id) {
            props.actionProxy.setActiveElementId(id);
        }
    };
    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id;
        if (id) {
            props.actionProxy.updateActiveElement({
                dx: e.movementX,
                dy: e.movementY
            })
        }
    };
    const handleMouseUp = (e: React.MouseEvent<SVGSVGElement>) => {
        props.actionProxy.setActiveElementId("root");
    };
    return useObserver(() => <svg width={'100%'}
                                  height={'100%'}
                                  onClick={handleClick}
                                  onMouseDown={handleMouseDown}
                                  onMouseMove={handleMouseMove}
                                  onMouseUp={handleMouseUp}
    >
        {renderDefs()}
        {renderNodes(props.actionProxy.nodes)}
        {renderLinks(props.actionProxy.links)}
    </svg>);
}
