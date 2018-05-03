import React, { Component } from 'react';
import './App.css';

class WeirdTextInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            string: this.props.string,
            nrOfSteps: this.props.steps
        }
    }

    buttonPressed = event => {
        event.preventDefault();
        if (!isNaN(event.target.children[0].value) && Number(event.target.children[0].value) >=0 && Number(event.target.children[0].value) <=25 ) {
            this.setState({ nrOfSteps: Number(event.target.children[0].value) });
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
            if (event.keyCode > 64 && event.keyCode < 91) {
               let inputNr = this.state.nrOfSteps + event.keyCode;
               if(inputNr > 90) {
                   inputNr = inputNr % 90 + 64;
               }
               this.setState({ string: this.state.string += String.fromCharCode(inputNr) });
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
                    <input id="nrOfStepsInput" text="text" placeholder="0-25" />
                    <button>Enter</button>
                </form>
            </div>
        );
    }
}

export default WeirdTextInputComponent;