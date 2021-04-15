import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('From Child')}>Greet Parent</button>
        </div>
    )
}


export default ChildComp;