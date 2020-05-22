import React, {useContext} from 'react';
import {Flower} from "./flower/";
import {StoreContext} from "./flower/context";
import {InitData} from "./flower/store/Proxy";


function App() {
    const data: InitData = [{
        id: "qqq",
        x: 140,
        y: 240,
        points: [{x: 0, y: 0,}],
        shape: "Start",
    }, {
        id: "qqq4",
        x: 400,
        y: 10,
        points: [{x: 0, y: 0}, {x: 90, y: 0}, {x: 90, y: 70}],
        shape: "Flow"
    }, {
        id: "qqq5",
        x: 20,
        y: 120,
        points: [{x: 0, y: 100}, {x: 0, y: 0}],
        shape: "Flow"
    }, {
        id: "qqq1",
        points: [{x: 0, y: 0,}],
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
        points: [{x: 0, y: 0,}],
        shape: "End",

    }];
    const {proxy} = useContext(StoreContext);
    proxy.initData(data);
    return <Flower proxy={proxy}/>
}

export default App;
