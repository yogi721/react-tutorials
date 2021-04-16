import React from 'react'
import Person from './Person'
import faker from 'faker'
import './cards.css'

function NameList() {
    // const names = ['Bruce', 'Clarck', 'Diana']
    // const nameList = names.map(name => <h2> {name} </h2>)

    // return <div>{nameList} </div>

    const persons = [
        {
            id: faker.datatype.uuid(),
            image: faker.image.avatar(),
            name: faker.name.firstName(),
            company: faker.company.companyName(),
            job: faker.name.jobTitle()
        },
        {
            id: faker.datatype.uuid(),
            image: faker.image.avatar(),
            name: faker.name.firstName(),
            company: faker.company.companyName(),
            job: faker.name.jobTitle()
        },
        {
            id: faker.datatype.uuid(),
            image: faker.image.avatar(),
            name: faker.name.firstName(),
            company: faker.company.companyName(),
            job: faker.name.jobTitle()
        }
    ]

    // const personList = persons.map(persone => (
    //     <h2>I am {persone.name}. I am {persone.age} years old. I know {persone.skill} </h2>
    // ))
    return (
        persons.map(person => <Person key={person.id} person={person} />)
    )


}

export default NameList