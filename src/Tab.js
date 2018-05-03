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
                <LoginComponent loggedIn={false} text={"You are logged out."} buttonText={"Login"} />
            </div>
        );
    }
    else if(props.current === "Two") {
        return(
            <div className="SecondDiv">
                <LockTextComponent editable={true} />
            </div>
        );
    }
    else if(props.current === "Three") {
        return(
            <div className="ThirdDiv">
                <WeirdTextInputComponent string={""} steps={1} />
            </div>
        );
    }
    else if(props.current === "Four") {
        return(
            <div className="FourthDiv">
                <GuessTheNumber randomNumber={Math.ceil(Math.random() * 100)} currentInput={""} text={"You have not entered a number yet."} numberOfTries={1} finishedGame={false} />
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