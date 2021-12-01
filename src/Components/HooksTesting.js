import { useEffect, useState } from "react";

const HooksTesting = () => {
    const [inputValue, setInputValue] = useState("Mike");

    useEffect(() => {
        console.log("test");
        alert("working");
    });

    return (
        <div>
            <h1>testo</h1>

            <input
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            ></input>
            <br />
            {inputValue}
        </div>
    );
};

export default HooksTesting;
