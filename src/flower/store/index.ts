import {Proxy} from "./Proxy"
import {configure} from "mobx";

configure({enforceActions: 'always'});

export const store = {
    proxy: new Proxy()
};

