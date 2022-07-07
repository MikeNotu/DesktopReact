import "./App.css";
import React from "react";

function App() {

    var sueldoJefe = 10
    var sueldoEmpleado = 2

    let amigo = "Juan"
    var sueldoamigo

    if(amigo=="Juan"){
        sueldoamigo=sueldoJefe
    }else{
        sueldoamigo=sueldoEmpleado
    }

    return (
        <div>
            {sueldoamigo}
        </div>
    );
}

export default App;
