import { useState } from "react";

const HooksTesting = () => {
    const [inputValue, setInputValue] = useState("Mike");

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
