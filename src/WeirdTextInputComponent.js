import React, { Component } from 'react';
import './App.css';

class WeirdTextInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            string: "",
            nrOfSteps: 1
        }
        this.keyPressed = this.keyPressed.bind(this);
        this.buttonPressed = this.buttonPressed.bind(this);
    }

    buttonPressed(event) {
        if (!isNaN(document.getElementById("nrOfStepsInput").value)) {
            this.setState({ nrOfSteps: Number(document.getElementById("nrOfStepsInput").value) });
        }
    }

    keyPressed(event) {
        if (event.keyCode === 8) {
            this.setState({ string: this.state.string.substring(0, this.state.string.length - 1) });
        }
        else if (event.keyCode === 32) {
            this.setState({ string: this.state.string += " " });
        }
        else {
            if (event.keyCode >= 65 && event.keyCode <= 90) {
                let theNr = this.state.nrOfSteps + event.keyCode;
                if (theNr > 90) {
                    theNr = theNr % 90;
                    this.setState({ string: this.state.string += String.fromCharCode(theNr + 64) });
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
                <div>
                    <input id="nrOfStepsInput" text="text" placeholder="" />
                    <button onClick={this.buttonPressed}>Enter</button>
                </div>
            </div>
        );
    }
}

export default WeirdTextInputComponent;