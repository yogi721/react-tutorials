import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/classes/ThemeContext'

function TodoList() {
    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext)
    const theme = isDarkTheme ? darkTheme : lightTheme

    return (
        <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center' }}>
            <p>Plan the family trip</p>
            <p>Go shopping for dinner</p>
            <p>Go for a walk</p>
            <button className='ui button primary' onClick={changeTheme}>Change the Theme</button>
        </div>
    )
}

export default TodoList
