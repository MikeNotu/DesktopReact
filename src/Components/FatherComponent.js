import { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

const FatherComponent = () => {
    const [username, setUsername] = useState("test");
    return (
        <div>
            <ChildComponent setUsername={setUsername} />
            {username}
        </div>
    );
};

export default FatherComponent;
