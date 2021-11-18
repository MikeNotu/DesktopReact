import "./App.css";
import React, { useState, useEffect } from "react";
import Table from "./Components/Table";

function App() {
    const [state, setState] = useState(0);

    function name() {
        setState(state + 1);
    }

    useEffect(() => {}, []);

    const numbers = state < 10 ? <p>{state}</p> : null;
    return (
        <div className="App">
            {numbers}
            <button onClick={name}>+1</button>
            <Table />
        </div>
    );
}

export default App;
