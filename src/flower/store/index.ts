import {ActionProxy, Data, Param} from "../../types";
import {action, observable} from "mobx";
import {Shape} from "./Shape";
import {Link} from "./Link";
import {Element} from "./Element";


export class Store implements ActionProxy {

    @observable nodes: Shape[] = [];
    @observable links: Link[] = [];

    @action initData(data: Data) {
        this.nodes = data.nodes.map(node => new Shape(node));
        this.links = data.links.map(link => new Link(link));
    }

    @action setActiveElementId(id: string) {
        Element.activeElementId = id;
    }

    @action setFocusElementId(id: string) {
        Element.focusElementId = id;
    }

    @action setHoverElementId(id: string) {
        Element.hoverElementId = id;
    }

    @action updateActiveElement({x, y, dx = 0, dy = 0}: Param) {
        const element = this.nodes.find(node => node.id === Element.activeElementId);
        console.log(element)
        if (element) {
            element.x = x ? x : element.x + dx;
            element.y = y ? y : element.y + dy;
        }
    };

}

