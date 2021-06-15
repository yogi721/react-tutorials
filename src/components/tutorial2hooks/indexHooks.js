import React from "react"
import HookCounterFour from "./counter/HookCounterFour"
import HookCounterThree from "./counter/HookCounterThree"
// import HookCounter from "./counter/HookCounter"
// import HookCounterTwo from "./counter/HookCounterTwo"
// import ClassCounter from "./counter/ClassCounter"


function IndexHooks() {
    return (
        <div>
            {/* <ClassCounter /> */}
            {/* <HookCounter /> */}
            {/* <HookCounterTwo /> */}
            <HookCounterThree />
            <HookCounterFour />
        </div>
    )
}

export default IndexHooks