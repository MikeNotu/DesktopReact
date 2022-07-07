import "./App.css";
import React from "react";

function App() {


    var boletos = 0


    function agregarUno () {

        boletos = boletos+1

        console.log("Cantidad de boletos: "+boletos)

    }

    function quitarUno () {

        boletos = boletos-1

        console.log("Cantidad de boletos: "+boletos)

    }

    return (
        <div>
            <button onClick={agregarUno}>Agregar Boleto</button>
            <button onClick={quitarUno}>Quitar Boleto</button>
        </div>
    );
}

export default App;
