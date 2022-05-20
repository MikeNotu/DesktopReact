export default function RefComponent1() {
    return (
        <div>
            <h1 className="Yahu">Test</h1>
            <button
                onClick={() => {
                    var EdadLalo = 24;
                    var aaa = EdadLalo * 2;
                    console.log(aaa);
                }}
            >
                Boton
            </button>
            <h1>Test</h1>
        </div>
    );
}
