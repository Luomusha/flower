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
import {randomId} from "../util";

type FlowerProps = {
    proxy: Proxy
}

type MODE = "DEFAULT" | "MOVE" | "RESIZE" | "LINK"

function renderDefs() {
    return <defs>
        <ArrowElement/>
    </defs>
}

function renderElement(shapes: ViewHandler[]) {
    return shapes.map(element => {
            const config = shapeConfigMap.get(element.shape) || unregisterShapeConfig;
            return <ContainerElement id={element.id}
                                     key={element.id}
                                     position={element.position}
                                     spaceWidth={element.spaceWidth}
                                     spaceHeight={element.spaceHeight}
                                     shape={element.shape}
                                     focus={element.focus}
                                     maxX={element.maxX}
                                     maxY={element.maxY}
                                     minX={element.minX}
                                     minY={element.minY}
                                     points={element.points}
            >
                {React.createElement(config.element, element)}
                {React.createElement(config.area, element)}
            </ContainerElement>
        }
    )
}

function renderOverlay(shapes: ViewHandler[]) {
    return shapes.map(shape => <g id={shape.id} key={shape.id}>
        {shape.points.map((p, index) => <circle cx={shape.position.vx + p.x}
                                                cy={shape.position.vy + p.y}
                                                r={5}
                                                key={randomId()}
                                                data-index={index}
                                                fillOpacity={0.1}
                                                stroke={'red'}
                                                pointerEvents={"all"}
                                                strokeWidth={1}
            />
        )}
    </g>)

}

export function FlowerElement(props: FlowerProps) {

    const [mode, setMode] = useState<MODE>("DEFAULT");
    const [debug, setDebug] = useState("");

    const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id;
        if (id) {
            props.proxy.setFocusElementId(id);
        }
    };
    const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id || "root";
        const pointIndex: number = parseInt(element.dataset['index'] || "NaN", 10);
        if (!isNaN(pointIndex)) {
            setMode("RESIZE")
        } else if (id) {
            setMode("MOVE")
        }
        props.proxy.setActiveElementId(id);
        props.proxy.setActiveElementPoint(pointIndex);
    };
    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
        const element = e.target as SVGSVGElement;
        const id = element.parentElement?.id;
        setDebug("activeElementPointIndex:" + ViewHandler.activeElementPoint || "");
        if (mode === "RESIZE") {
            props.proxy.proxyMoveActiveElementPointBy(e.movementX, e.movementY)
        } else if (mode === "MOVE") {
            props.proxy.proxyMoveActiveElementBy(e.movementX, e.movementY)

        }
    };
    const handleMouseUp = (e: React.MouseEvent<SVGSVGElement>) => {
        props.proxy.setActiveElementId("root");
        props.proxy.setActiveElementPoint(NaN);

        setMode("DEFAULT")
    };
    return useObserver(() => <>
        <svg width={'100%'}
             height={'100%'}
             onClick={handleClick}
             onMouseDown={handleMouseDown}
             onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp}
        >
            {renderDefs()}
            <g className={"debug"}><CodeElement shapes={props.proxy.shapes} message={debug + "     " + mode}/></g>
            <g className={"flow"}>{renderElement(props.proxy.shapes)}</g>
            <g className={"overlay"}>{renderOverlay(props.proxy.shapes)}</g>
        </svg>
    </>)
}
