import React, { Component } from 'react';
import './App.css';

class WeirdTextInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            string: ""
        }
        this.keyPressed = this.keyPressed.bind(this);
    }

    keyPressed(event) {
        
        if(event.keyCode === 8) {
            this.setState({string: this.state.string.substring(0, this.state.string.length - 1)});
        }
        else {
            if(event.keyCode === 32) {
                this.setState({string: this.state.string += " "});
            }
            else if(event.keyCode === 90) {
                this.setState({string: this.state.string += "A"});
            }
            else {
                if(event.keyCode >= 65 && event.keyCode <= 90) {
                    let addingToString = undefined;
                    let unicode = (event.which || event.keyCode);
                    addingToString = this.state.string + String.fromCharCode(unicode + 1);
                    this.setState({string: addingToString});
                }
            }
            
        }
    }

    render() {
        return (
            <div className="WeirdTextInputComponent">
                <form>
                    <textarea className="weirdTextArea" onKeyDown={this.keyPressed} value={this.state.string}/>
                </form>
            </div>
        );
    }
}

export default WeirdTextInputComponent;