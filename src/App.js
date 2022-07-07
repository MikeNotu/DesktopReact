import "./App.css";
import React from "react";

function App() {

    var sueldo = 10;
    var nombre = "Juan";
    var prendido = true;

    let sueldo2 = 10;
    const arizona = 13;

    var cliente = {
        nombre: "Pedro",
        edad: 20,
        casado: false,
    }

    var arreglo = [1,20,400,10,30]


    return (
        <div>
         <h1 className="mike">Titulo</h1> 
         {cliente.edad}
        </div>
    );
}

export default App;
