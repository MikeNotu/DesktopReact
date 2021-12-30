import React, { Component } from "react";

class Clase extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = { count: 0 };
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    state = { number: 5 };
    render() {
        const { number, name } = this.props;

        return (
            <h1>
                Class Component {name} {number}
                <div>Count: {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </h1>
        );
    }
}

export default Clase;
