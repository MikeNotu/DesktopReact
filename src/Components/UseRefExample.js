import { useRef } from "react";

const UseRefExample = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Mike</h1>
            <input type="text" placeholder="Example...." ref={inputRef} />
            <button onClick={onClick}>Change Name2</button>
        </div>
    );
};

export default UseRefExample;
