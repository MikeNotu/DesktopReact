import { useRef } from "react";

const UseRefExample = () => {
    const inputRef = useRef(null);

    const inputRefTwo = useRef(null);

    const onClick = () => {
        inputRef.current.focus();
    };

    const onClickTwo = () => {
        inputRefTwo.current.value = "";
    };

    return (
        <div>
            <h1>Mike</h1>
            <input type="text" placeholder="Example...." ref={inputRef} />
            <button onClick={onClick}>Focus</button>

            <input type="text" placeholder="Example...." ref={inputRefTwo} />
            <button onClick={onClickTwo}>Clear Text</button>
        </div>
    );
};

export default UseRefExample;
