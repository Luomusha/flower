import {Link as LinkVM, LinkType, Position} from "../../types"
import {FlowerElement} from "./FlowerElement"

export class Link extends FlowerElement implements LinkVM {
    endElementId?: string;
    startElementId?: string;
    points: Position[] = [];
    x: number = 0;
    y: number = 0;

    constructor(link: LinkType) {
        super(link);
        this.x = link.x;
        this.y = link.y;
    }

    moveBy = (dx: number, dy: number) => {
    };
    moveTo = (x: number, y: number) => {
    };

}
