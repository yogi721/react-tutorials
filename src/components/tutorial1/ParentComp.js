import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childParam) {
        alert(`Hello ${this.state.parentName} ${childParam}`)
    }

    render() {
        return (
            <div>
                <ChildComp greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComp;