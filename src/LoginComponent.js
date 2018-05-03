import React, { Component } from 'react';
import './App.css';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: this.props.loggedIn,
            text: this.props.text,
            buttonText: this.props.buttonText
        }
    }

    logInButtonEvent = event => {
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