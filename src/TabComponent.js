import React, { Component } from 'react';
import Tab from './Tab.js';
import './App.css';

class TabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "One"
        }
        this.updateTestVariableOne = this.updateTestVariableOne.bind(this);
        this.updateTestVariableTwo = this.updateTestVariableTwo.bind(this);
        this.updateTestVariableThree = this.updateTestVariableThree.bind(this);
        this.updateTestVariableFour = this.updateTestVariableFour.bind(this);
    }

    updateTestVariableOne() {
        this.setState({ current: "One" });
    }

    updateTestVariableTwo() {
        this.setState({ current: "Two" });
    }

    updateTestVariableThree() {
        this.setState({ current: "Three" });
    }

    updateTestVariableFour() {
        this.setState({ current: "Four" });
    }

    render() {
        return (
            <div className="TabComponent">
                <button id="btnDiv" onClick={this.updateTestVariableOne}>Login</button>
                <button id="btnDiv" onClick={this.updateTestVariableTwo}>Textfield</button>
                <button id="btnDiv" onClick={this.updateTestVariableThree}>WeirdText</button>
                <button id="btnDiv" onClick={this.updateTestVariableFour}>GuessNr</button>
                <Tab current={this.state.current} />
            </div>
        );
    }
}

export default TabComponent;