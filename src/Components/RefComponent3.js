import React, { useState, useRef, useEffect } from "react";

export default function RefComponent3() {
    const [name, setName] = useState("");
    const prevName = useRef();

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    return (
        <>
            <input
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <div>
                My name is {name} and it used to be {prevName.current}
            </div>
        </>
    );
}
