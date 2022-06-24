import "./App.css";
import React from "react";
import Button from "./Components/Button";
import Countdown from "./Components/Countdown";

function App() {

var Rick = [10,20,30];

    return (
        <div>
            <h1>Hola Mundo, soy React!</h1>
            <h2>Hola Mundo, soy React!</h2>
            <h3>Hola Mundo, soy React!</h3>
            {Rick[2]}
            <Button/>
            <Countdown/>
        </div>
    );
}

export default App;
