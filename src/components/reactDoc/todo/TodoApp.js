import React, { Component } from 'react'
import TodoList from './TodoList'

class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = { items: [], text: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) { return }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState(state => ({
            item: state.items.concat(newItem),
            text: ''
        }))
    }

    handleChange(e) {
        this.setState({ text: e.target.value })

    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input type="text"
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoApp
