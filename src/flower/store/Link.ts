import {Link as LinkVM, LinkType, Position} from "../../types"
import {randomId} from "../util";
import {Element} from "./Element"

export class Link extends Element implements LinkVM {
    endElementId?: string;
    startElementId?: string;
    points: Position[] = [];

}
