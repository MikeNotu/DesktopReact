import { useEffect, useState } from "react";

function Each() {
    const [value, setValue] = useState(0);
    const [variable, setVariable] = useState();

    function name(params) {
        setInterval(doStuff, 1000);
    }

    function doStuff() {
        setValue((value) => value + 10);
    }

    useEffect(() => {
        name();
    }, []);

    return (
        <div>
            <h1>hello</h1>
            <progress max="100" value={value}></progress>
            <br />

            <br />
            <button onClick={() => console.log(variable)}>TestButton</button>
        </div>
    );
}

export default Each;
