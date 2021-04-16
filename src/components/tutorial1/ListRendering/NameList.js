import React from 'react'
import faker from 'faker'
import './cards.css'

function NameList() {
    // const names = ['Bruce', 'Clarck', 'Diana']
    // const nameList = names.map(name => <h2> {name} </h2>)

    // return <div>{nameList} </div>

    const persons = [
        {
            id: faker.random.uuid(),
            image: faker.image.avatar(),
            name: faker.name.firstName(),
            company: faker.company.companyName(),
            job: faker.name.jobTitle()
        },
        {
            id: faker.random.uuid(),
            image: faker.image.avatar(),
            name: faker.name.firstName(),
            company: faker.company.companyName(),
            job: faker.name.jobTitle()
        },
        {
            id: faker.random.uuid(),
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
        persons.map(persone => (
            <div className="card" >
                <img src={persone.image} alt={persone.name} style={{ "width": "100%" }}></img>
                <div className="container">
                    <h4><b> {persone.name} </b></h4>
                    <p>Work at: {persone.company} </p>
                    <p>Job: {persone.job} </p>
                </div>
            </div>
        ))
    )


}

export default NameList