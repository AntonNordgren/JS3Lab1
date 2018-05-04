import React, { Component } from 'react';
import './App.css';

import LoginComponent from './LoginComponent.js';
import LockTextComponent from './LockTextComponent.js';
import WeirdTextInputComponent from './WeirdTextInputComponent.js';
import GuessTheNumber from './GuessTheNumber.js';

function TabSelection(props) {
    if(props.current === "One" || props.current === "") {
        return(
            <div className="FirstDiv">
                <LoginComponent />
            </div>
        );
    }
    else if(props.current === "Two") {
        return(
            <div className="SecondDiv">
                <LockTextComponent />
            </div>
        );
    }
    else if(props.current === "Three") {
        return(
            <div className="ThirdDiv">
                <WeirdTextInputComponent />
            </div>
        );
    }
    else if(props.current === "Four") {
        return(
            <div className="FourthDiv">
                <GuessTheNumber />
            </div>
        );
    }
}

class Tab extends Component {
    render() {
        return (
            <TabSelection current={this.props.current} />
        );
    }
}

export default Tab;