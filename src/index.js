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

ReactDOM.render(
    <React.StrictMode>
        {/* <HooksTesting /> */}
        <FatherComponent />
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
