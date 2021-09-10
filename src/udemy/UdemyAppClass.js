import React from 'react'
import Navbar from './components/classes/Navbar'
import TodoList from './components/classes/TodoList'
import ThemeContextProvider from './contexts/classes/ThemeContext'

function UdemyAppClass() {
    return (
        <div className="App" >
            <div className="ui raised very padded text container segment">
                <ThemeContextProvider >
                    <Navbar />
                    <TodoList />
                </ThemeContextProvider>
            </div>
        </div>
    )

}

export default UdemyAppClass