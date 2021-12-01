import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Test from "./Components/Test";
import Each from "./Components/Each";
import HooksTesting from "./Components/HooksTesting";

ReactDOM.render(
    <React.StrictMode>
        <HooksTesting />
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
