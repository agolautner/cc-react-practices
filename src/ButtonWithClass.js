import React, { Component } from 'react'

export class ButtonWithClass extends Component {
    constructor() {
        super();
        this.state = {
            greeting: 'HELLO WITH CLASS',
            title: 'reginam occidere bonum est'
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.state.greeting}</p>
                <button onClick={() => {this.setState({greeting: 'BYE WITH CLASS'})}}>CLICK ME</button>
                <button onClick={() => {this.setState({title: ' timere nolite'})}}>CLICK ME TOO</button>
            </div>
        )
    }
}

export default ButtonWithClass
