import React, {useContext} from 'react';
import {Flower} from "./flower/";
import {StoreContext} from "./flower/context";
import {InitData} from "./flower/store/Proxy";


function App() {
    const data: InitData = [{
        id: "qqq",
        x: 140,
        y: 240,
        name: "Start"
    }, {
        id: "qqq1",

        x: 120,
        y: 60,
        name: "Task"
    }, {
        id: "qqq2",

        x: 420,
        y: 280,
        name: "Rect"
    }, {
        id: "qqq3",

        x: 310,
        y: 280,
        name: "End"
    }, {
        id: "qqq4",

        x: 300,
        y: 100,
        points: [{x: 0, y: 10}, {x: 90, y: 10}, {x: 90, y: 80}],
        name: "Flow"
    }, {
        id: "qqq5",
        x: 500,
        y: 100,
        points: [{x: 10, y: 20}, {x: 100, y: 20}],
        name: "Flow"
    }];
    const {proxy} = useContext(StoreContext);
    proxy.initData(data);
    return <Flower proxy={proxy}/>
}

export default App;
