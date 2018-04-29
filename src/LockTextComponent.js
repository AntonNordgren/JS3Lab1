import React, { Component } from 'react';
import './App.css';

class LockTextComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: true
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleTextChange(event) {
        if(this.state.editable) {
        }
    }

    handleCheckbox(event) {
        if(this.state.editable) {
            this.setState({editable: false});
        }
        else if(!this.state.editable) {
            this.setState({editable: true});
        }
    }

    render() {
        return (
            <div className="LockTextComponent">
                <form>
                    <textarea className="lockTextArea" onChange={this.handleTextChange} disabled={!this.state.editable} />
                    <input className="textCheckbox" type="checkbox" onChange={this.handleCheckbox} checked={this.state.editable} />
                </form>
            </div>
        );
    }
}

export default LockTextComponent;