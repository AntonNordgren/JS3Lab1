import React, { Component } from 'react';
import './App.css';

class GuessTheNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: Math.ceil(Math.random() * 100),
            currentInput: "",
            text: "You have not entered a number yet.",
            numberOfTries: 1,
            finishedGame: false
        }
    }

    makeGuess = event => {
        event.preventDefault();
        let nr = event.target.children[0].value;

        if(isNaN(nr) || Number(nr) < 1 || Number(nr) > 100) {
            this.setState({text: "Invalid Input."});
        }
        else {
            if(nr == this.state.randomNumber) {
                this.setState({text: (nr + " is right!, number of tries: ") + this.state.numberOfTries, finishedGame: true});
            }
            else if(nr < this.state.randomNumber) {
                this.setState({text: (nr + " is too small."), numberOfTries: this.state.numberOfTries + 1});
            }
            else if(nr > this.state.randomNumber) {
                this.setState({text: (nr + " is too big."), numberOfTries: this.state.numberOfTries + 1});
            }
        }
        this.setState({currentInput: ""});
    }

    reset = event => {
        this.setState({
            randomNumber: Math.ceil(Math.random() * 100),
            currentInput: "",
            text: "You have not entered a number yet.",
            numberOfTries: 1,
            finishedGame: false
        });
    }

    render() {

        let comp;
        if(!this.state.finishedGame) {
            comp =  <div>
                        <div className="guessInstructions">
                            Guess a number from 1-100.
                        </div>
                        <form onSubmit={this.makeGuess}>
                            <input className="guessInput" type="text" placeholder="Enter a number (1-100)" />
                            <button className="guessButton" >Guess</button>
                        </form>
                        <button className="resetButton" onClick={this.reset} >Reset</button>
                        <div className="guessTheNumberResult">
                            {this.state.text}
                            {this.state.currentInput}
                        </div>
                    </div>
        }
        else {
            comp =  <div>
                        <div>
                            <button className="resetButton" onClick={this.reset} >Reset</button>
                        </div>
                        <div className="guessTheNumberResult">
                            {this.state.text}
                            {this.state.currentInput}
                        </div>
                    </div>
        }

        return (
            <div className="GuessTheNumber">
                {comp}
            </div>
        );
    }
}

export default GuessTheNumber;