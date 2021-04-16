import React from 'react'

function NameList() {
    // const names = ['Bruce', 'Clarck', 'Diana']
    // const nameList = names.map(name => <h2> {name} </h2>)

    // return <div>{nameList} </div>

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 20,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 29,
            skill: 'Vue'
        }
    ]

    const personList = persons.map(persone => (
        <h2>I am {persone.name}. I am {persone.age} years old. I know {persone.skill} </h2>
    ))
    return <div> {personList} </div>


}

export default NameList
