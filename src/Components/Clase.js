import React, { Component } from "react";

class Clase extends Component {
    // constructor(props) {
    // console.log(props);
    // super(props);
    // this.state = { number: 5 };
    // }
    state = { number: 5 };
    render() {
        const { number, name } = this.props;

        return (
            <h1>
                Class Component {name} {number}
            </h1>
        );
    }
}

export default Clase;
