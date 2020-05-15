import React from 'react';
import {Data} from "./types";
import {Store} from "./flower/store";
import {Flower} from "./flower";


function App() {
    const data: Data = {
        nodes: [{
            x: 40,
            y: 40
        }, {
            x: 120,
            y: 60
        }, {
            x: 120,
            y: 80
        }, {
            x: 110,
            y: 80
        }],
        links: [{
            x: 0,
            y: 0
        }, {
            x: 100,
            y: 100
        },],
    };
    const model = new Store();
    model.initData(data);
    return <Flower actionProxy={model}/>
}

export default App;
