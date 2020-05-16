import React, {useContext} from 'react';
import {Flower} from "./flower";
import {StoreContext} from "./flower/context";
import {InitData} from "./types";


function App() {
    const data: InitData = {
        shapes: [{
            x: 40,
            y: 40
        }, {
            x: 120,
            y: 60
        }, {
            x: 220,
            y: 80
        }, {
            x: 310,
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
    const {proxy} = useContext(StoreContext);
    proxy.initData(data);
    return <Flower proxy={proxy}/>
}

export default App;
