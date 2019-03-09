import React, { Component } from 'react';

/**
 * I'm a smart component/class component/stateful component
 */
class AnotherComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: props.color
        }
    }
    handleChildButtonClick() {
        alert("Whoa! you clicked");
    }
    render() {
        return (
            <div class="box another">
                I'm of color {this.state.color}
                <div>
                    <button onClick={() => this.setState({ color: 'fuchisia'})}>Change my color</button>
                </div>
            </div>
        );
    }
}

export default AnotherComponent;