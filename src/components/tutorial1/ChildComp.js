import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('From ChildComponent')}>Greet Parent</button>
        </div>
    )
}


export default ChildComp;