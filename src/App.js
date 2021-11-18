import "./App.css";
import React, { useState, useEffect } from "react";
import Table from "./Components/Table";

function App(props) {
    const [state, setState] = useState(0);

    function name() {
        setState(state + 1);
    }

    useEffect(() => {}, []);

    const Values = [{ number: 1001 }, { number: 20 }, { number: 30 }];

    const numbers = state < 10 ? <p>{state}</p> : null;
    return (
        <div className="App">
            {numbers}
            <button onClick={name}>+1</button>
            <Table number={Values[0].number}></Table>
        </div>
    );
}

export default App;
