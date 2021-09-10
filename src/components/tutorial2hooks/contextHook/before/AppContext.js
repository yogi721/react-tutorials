import React from 'react'
import ComponentC from './components/ComponentC'

const UserContext = React.createContext()

function AppContext() {
    return (
        <div className='app-context'>
            <UserContext.Provider value={'Tomy'} >
                <ComponentC />
            </UserContext.Provider>
        </div>
    )
}

export default AppContext
