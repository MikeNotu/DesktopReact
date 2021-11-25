function Test() {
    return (
        <div>
            <form className="row" onSubmit={console.log("test")}>
                <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="form-control"
                        onChange={console.log("test")}
                        name="nombre"
                    ></input>
                </div>
                <div className="col-md-3">
                    <input
                        type="text"
                        placeholder="Apellido"
                        className="form-control"
                        onChange={console.log("test")}
                        name="apellido"
                    ></input>
                </div>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Test;
