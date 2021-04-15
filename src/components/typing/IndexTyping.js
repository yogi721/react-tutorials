import React, { Component } from 'react'
import Preview from './Preview'
import Speed from './Speed'

const initialState = {
    text: 'now that you know how to type with all ten fingers, lets work on your speed and then move on to other keys.',
    userInput: '',
    symbols: 0,
    sec: 0,
    started: false,
    finished: false
}

class IndexTyping extends Component {

    state = initialState

    onRestart = () => {
        this.setState(initialState)
    }

    onUserInputChange = (e) => {
        const v = e.target.value;
        this.setTimer(v);
        this.onFinish(v);
        this.setState({
            userInput: v,
            symbols: this.countCorrectSymbols(v)
        })
    }

    onFinish(userInput) {
        if (userInput === this.state.text) {
            clearInterval(this.interval);
            this.setState({
                finished: true
            })
            
        }
    }

    countCorrectSymbols = (userInput) => {
        const text = this.state.text.replace(' ', '');
        return userInput.replace(' ', '').split('').filter((s, i) => s === text[i]).length
    }

    setTimer() {
        if (!this.state.started) {
            this.setState({ started: true });
            this.interval = setInterval(() => {
                this.setState(prevProps => {
                    return { sec: prevProps.sec + 1 }
                })
            }, 1000)
        }
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <Preview text={this.state.text} userInput={this.state.userInput} />
                <textarea
                    value={this.state.userInput}
                    onChange={this.onUserInputChange}
                    className="form-control mb-3"
                    placeholder="Start Typing"
                    readOnly={this.state.finished}
                >
                </textarea>
                <Speed sec={this.state.sec} symbols={this.state.symbols} />
                <button className="btn btn-light" onClick={this.onRestart}>Restart</button>
            </div>
        )
    }
}


export default IndexTyping
