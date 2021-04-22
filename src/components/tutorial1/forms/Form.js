import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        // initial state
        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    // handlers 
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (e) => {
        this.setState({
            comments: e.target.value
        })
    }

    handleTopicChange = (e) => {
        this.setState({
            topic: e.target.value
        })
    }

    handleSubmit = (e) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        e.preventDefault();

    }

    render() {
        const { username, comments, topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Comments:</label>
                    <textarea
                        name=""
                        id="" cols="30"
                        rows="10"
                        value={comments}
                        onChange={this.handleCommentsChange}
                    >
                    </textarea>
                </div>
                <div>
                    <label>Tpics:</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <button type="submit" >Submit</button>
            </form>
        )
    }
}

export default Form
