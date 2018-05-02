import React, { Component } from 'react';
import './App.css';

class WeirdTextInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            string: "",
            nrOfSteps: 1
        }
    }

    buttonPressed = event => {
        event.preventDefault();
        if (!isNaN(event.target.children[0].value)) {
            this.setState({ nrOfSteps: Number(document.getElementById("nrOfStepsInput").value) });
        }
    }

    keyPressed = event => {
        if (event.keyCode === 8) {
            this.setState({ string: this.state.string.substring(0, this.state.string.length - 1) });
        }
        else if (event.keyCode === 32) {
            this.setState({ string: this.state.string += " " });
        }
        else {
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                let inputNr = this.state.nrOfSteps + event.keyCode;
                if (inputNr > 90) {
                    let charNr = inputNr % 90;
                    this.setState({ string: this.state.string += String.fromCharCode(charNr + 64) });
                }
                else {
                    let newChar = String.fromCharCode(event.keyCode + this.state.nrOfSteps);
                    this.setState({ string: this.state.string += newChar });
                }
            }
        }
    }

    render() {
        return (
            <div className="WeirdTextInputComponent">
                <div>
                    Nr of steps: {this.state.nrOfSteps}
                </div>
                <textarea className="weirdTextArea" onKeyDown={this.keyPressed} value={this.state.string} />
                <form onSubmit={this.buttonPressed}>
                    <input id="nrOfStepsInput" text="text" placeholder="" />
                    <button>Enter</button>
                </form>
            </div>
        );
    }
}

export default WeirdTextInputComponent;