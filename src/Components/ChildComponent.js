const ChildComponent = ({ setUsername }) => {
    return (
        <div>
            <h1>ChildComponent</h1>
            <input
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
        </div>
    );
};

export default ChildComponent;
