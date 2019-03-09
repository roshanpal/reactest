import React, { Component } from 'react';
import DumbComponent from './DumbComponent';
import AnotherComponent from './AnotherComponent';

/**
 * I'm a smart component/class component/stateful component
 */
class ClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            childName: "Rockstar is my name",
            color: 'red'
        }
    }
    handleChildButtonClick() {
        alert("Whoa! you clicked");
    }
    render() {
        return (
            <div>
                <h1>I'm the parent compoenent ( I'm called smart/class/stateful componet )</h1>
                <button onClick={() => this.setState({ childName: 'Hachiko is my new name' })}>Parent wants to change child's name, click here</button>
                <br />
                <br />
                <div>
                    <DumbComponent clickHandler={this.handleChildButtonClick} title={this.state.childName} />
                </div>
                <br />
                <div>
                    <AnotherComponent color={this.state.color} />
                </div>
            </div>
        );
    }
}

export default ClassComponent;