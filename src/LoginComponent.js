import React, { Component } from 'react';
import './App.css';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            text: "You are logged out.",
            buttonText: "Login"
        }
        this.logInButtonEvent = this.logInButtonEvent.bind(this);
    }

    logInButtonEvent () {
        if(!this.state.loggedIn) {
            this.setState({
                loggedIn: true,
                text: "You are logged in!",
                buttonText: "Logout"
            });
        }
        else if (this.state.loggedIn) {
            this.setState({
                loggedIn: false,
                text: "You are logged out.",
                buttonText: "Login"
            });
        }
    }

    render() {
        return (
            <div className="LoginComponent">
                <button className="loginButton" onClick={this.logInButtonEvent}>{this.state.buttonText}</button>
                <div className="logInTextDiv">
                    {this.state.text}
                </div>
            </div>
        );
    }
}

export default LoginComponent;