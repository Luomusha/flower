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
        x: 300,
        y: 100,
        points: [{x: 10, y: 10}, {x: 90, y: 10}],
        name: "Link"
    }, {
        x: 400,
        y: 100,
        points: [{x: 10, y: 20}, {x: 100, y: 20}],
        name: "Link"
    }];
    const {proxy} = useContext(StoreContext);
    proxy.initData(data);
    return <Flower proxy={proxy}/>
}

export default App;
