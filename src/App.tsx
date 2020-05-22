import React, {useContext} from 'react';
import {Flower} from "./flower/";
import {StoreContext} from "./flower/context";
import {InitData} from "./flower/store/Proxy";


function App() {
    const data: InitData = [{
        id: "qqq",
        x: 140,
        y: 240,
        points: [{x: 0, y: 0,}, {x: 36, y: 36}],
        shape: "Start",
    }, {
        id: "qqq4",
        x: 0,
        y: 0,
        points: [{x: 400, y: 10}, {x: 490, y: 10}, {x: 490, y: 80}],
        shape: "Flow"
    }, {
        id: "qqq5",
        x: 0,
        y: 0,
        points: [{x: 20, y: 220}, {x: 20, y: 120}],
        shape: "Flow"
    }, {
        id: "qqq1",
        points: [{x: 0, y: 0,}, {x: 100, y: 80}],
        shape: "Task",
        x: 120,
        y: 60,
    }, {
        id: "qqq2",
        points: [{x: 0, y: 0,}],

        x: 420,
        y: 280,
        shape: "Rect",
    }, {
        id: "qqq3",
        x: 380,
        y: 200,
        points: [{x: 0, y: 0,}, {x: 36, y: 36}],
        shape: "End",

    }];
    const {proxy} = useContext(StoreContext);
    proxy.initData(data);
    return <Flower proxy={proxy}/>
}

export default App;
