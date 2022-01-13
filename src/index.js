import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Test from "./Components/Test";
import Each from "./Components/Each";
import HooksTesting from "./Components/HooksTesting";
import UseRefExample from "./Components/UseRefExample";
import FatherComponent from "./Components/FatherComponent";
import ProgressBarExample from "./Components/ProgressBarExample";
import Button from "./Components/Button";
import Todos from "./Components/Todos";
import Clase from "./Components/Clase";
import RefComponent1 from "./Components/RefComponent1";
import RefComponent2 from "./Components/RefComponent2";
import RefComponent3 from "./Components/RefComponent3";

ReactDOM.render(
    <React.StrictMode>
        {/* <HooksTesting /> */}
        {/* <FatherComponent /> */}
        {/* <Button /> */}
        {/* <Todos /> */}
        <RefComponent1 />
        <RefComponent2 />
        <RefComponent3 />
        {/* <Clase number={3} name="Mike" /> */}
        {/* <ProgressBarExample/> */}
        {/* <UseRefExample /> */}
        {/* <Each /> */}
        {/* <App /> */}
        {/* <Test /> */}
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
