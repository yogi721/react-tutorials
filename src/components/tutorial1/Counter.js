import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    decrease() {
        this.setState({
            count: this.state.count - 1
        })
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        })
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <div>
                    <span>{this.state.count}</span>
                </div>
                <button onClick={() => this.decrease()}>Decrease</button>
                <button onClick={() => this.reset()}>Reset</button>
                <button onClick={() => this.increase()}>Increase</button>
            </div>
        )
    }
}

export default Counter
