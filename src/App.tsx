import React, {useContext} from 'react';
import {Flower} from "./flower/";
import {StoreContext} from "./flower/context";
import {InitData} from "./flower/store/Proxy";


function App() {
    const data: InitData = [{
        id: "qqq",
        x: 140,
        y: 240,
        name: "Start",
        shape: "Start",
    }, {
        id: "qqq4",
        x: 0,
        y: 0,
        points: [{x: 400, y: 10}, {x: 490, y: 10}, {x: 490, y: 80}],
        name: "Flow"
    }, {
        id: "qqq5",
        x: 0,
        y: 0,
        points: [{x: 20, y: 220}, {x: 20, y: 120}],
        name: "Flow"
    }, {
        id: "qqq1",
        x: 120,
        y: 60,
        name: "Task",
        shape: "Start"

    }, {
        id: "qqq2",
        x: 420,
        y: 280,
        name: "Rect",
        shape: "Start"

    }, {
        id: "qqq3",
        x: 380,
        y: 200,
        name: "End",
        shape: "Start"

    }];
    const {proxy} = useContext(StoreContext);
    proxy.initData(data);
    return <Flower proxy={proxy}/>
}

export default App;
