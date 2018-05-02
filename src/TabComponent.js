import React, { Component } from 'react';
import Tab from './Tab.js';
import './App.css';

class TabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "One"
        }
    }

    updateTestVariableOne = event => {
        this.setState({ current: "One" });
    }

    updateTestVariableTwo = event => {
        this.setState({ current: "Two" });
    }

    updateTestVariableThree = event => {
        this.setState({ current: "Three" });
    }

    updateTestVariableFour = event => {
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