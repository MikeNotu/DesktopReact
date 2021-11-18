import "./App.css";
import React, { useState, useEffect } from "react";
import Table from "./Components/Table";

function App(props) {
    const [state, setState] = useState(0);

    function name() {
        setState(state + 1);
    }

    useEffect(() => {}, []);

    const Values = [{ number: 5 }, { number: 13 }, { number: 1998 }];

    const numbers = state < 10 ? <p>{state}</p> : null;
    return (
        <div className="App">
            {numbers}
            <button onClick={name}>+1</button>
            <Table
                day={Values[0].number}
                month={Values[1].number}
                year={Values[2].number}
            ></Table>
        </div>
    );
}

export default App;
