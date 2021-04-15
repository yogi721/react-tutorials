import React from 'react'
import Counter from './Counter';
import EventBind from './EventBind';
import FunctionClick from './FunctionClick';
import Greeting from './Greeting';
import NameList from './NameList';
import ParentComp from './ParentComp';
import UserGreeting from './UserGreeting';


function IndexTutorial() {
    return (
        <div>
            <Counter />
            <Greeting name="Mehdi" heroName="speedy man" />
            <FunctionClick />
            <EventBind />
            <ParentComp />
            <UserGreeting />
            <NameList />
        </div>
    )
}

export default IndexTutorial
