import "./App.css";
import React from "react";

function App() {


    var puertaAbierta = false


    function moverPuerta() {

        puertaAbierta=!puertaAbierta

        if(puertaAbierta===true){
            console.log("La puerta esta abierta")
        }else{
            console.log("La puerta esta cerrada")
        }

    }

    function nombre() {
        
    }

    const nombre2 = () =>{}



    return (
        <div>
            <button onClick={moverPuerta}>Mover Puerta</button>
        </div>
    );
}

export default App;
