import React, {useContext} from 'react';
import {Flower} from "./flower";
import {StoreContext} from "./flower/context";
import {InitData} from "./types";


function App() {
    const data: InitData = [{
        x: 40,
        y: 40,
        name: "Circle"
    }, {
        x: 120,
        y: 60,
        name: "Circle"
    }, {
        x: 220,
        y: 80,
        name: "Rect"
    }, {
        x: 310,
        y: 80,
        name: "Rect"
    }, {
        x: 0,
        y: 0,
        name: "Circle"
    }, {
        x: 100,
        y: 100,
        name: "Circle"
    }];
    const {proxy} = useContext(StoreContext);
    proxy.initData(data);
    return <Flower proxy={proxy}/>
}

export default App;
