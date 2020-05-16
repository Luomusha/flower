import {Link as LinkVM, LinkType, Position} from "../../types"
import {Element} from "./Element"

export class Link extends Element implements LinkVM {
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
