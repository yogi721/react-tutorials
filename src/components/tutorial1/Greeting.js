import React from 'react'

const Greeting = ({ name, heroName }) => {
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}

export default Greeting;