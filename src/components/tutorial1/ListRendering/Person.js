import React from 'react'

function Person({ person }) {
    return (
        <div className="card" >
            <img src={person.image} alt={person.name} style={{ "width": "100%" }}></img>
            <div className="container">
                <h4><b> {person.name} </b></h4>
                <p>Work at: {person.company} </p>
                <p>Job: {person.job} </p>
                <p>ID: {person.id} </p>
            </div>
        </div>
    )
}

export default Person
