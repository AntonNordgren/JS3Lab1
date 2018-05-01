import React, { Component } from 'react';
import './App.css';

class GuessTheNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: Math.ceil(Math.random() * 100),
            currentInput: "",
            text: "You have not entered a number yet.",
            numberOfTries: 1
        }
        this.makeGuess = this.makeGuess.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.reset = this.reset.bind(this);
    }

    makeGuess() {
        let nr = document.getElementsByClassName('guessInput')[0].value;

        if(isNaN(nr) || Number(nr) < 1 || Number(nr) > 100) {
            this.setState({text: "Invalid Input."});
        }
        else {
            if(nr == this.state.randomNumber) {
                this.setState({text: "Right!, number of tries: " + this.state.numberOfTries});
            }
            else if(nr < this.state.randomNumber) {
                this.setState({text: "Too Small.", numberOfTries: this.state.numberOfTries + 1});
            }
            else if(nr > this.state.randomNumber) {
                this.setState({text: "Too Big.", numberOfTries: this.state.numberOfTries + 1});
            }
        }
        this.setState({currentInput: ""});
    }

    handleInput(event) {
        /*
        if(event.key === "Backspace") {
            console.log("Backspace clicked");
            this.setState({currentInput: this.state.currentInput.substring(0, this.state.currentInput.length - 1)});
        }
        else {
            this.setState({currentInput: this.state.currentInput += event.key});
        }
        console.log("CurrentInput: " + this.state.currentInput);
        */
    }

    reset(event) {
        this.setState({
            randomNumber: Math.ceil(Math.random() * 100),
            currentInput: "",
            text: "You have not entered a number yet.",
            numberOfTries: 1
        });
        document.getElementsByClassName('guessInput')[0].value = "";
    }

    render() {
        return (
            <div className="GuessTheNumber">
                <div className="guessInstructions">
                    Guess a number from 1-100.
                </div>
                <input onKeyDown={this.handleInput} className="guessInput" type="text" placeholder="Enter a number (1-100)" />
                <button onClick={this.makeGuess} className="guessButton" >Guess</button>
                <button onClick={this.reset} className="guessButton" >Reset</button>
                <div className="guessTheNumberResult">
                    {this.state.text}
                    {this.state.currentInput}
                </div>
            </div>
        );
    }
}

export default GuessTheNumber;