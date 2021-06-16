import React from 'react'
import Counter from './hooks/Counter'
import Timer from './stateful-component/Timer'
import TodoApp from './todo/TodoApp'


function IndexDoc() {
    return (
        <div>
            <Timer />
            <TodoApp />
            <Counter />
        </div>
    )
}

export default IndexDoc
