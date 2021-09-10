import store from "./store";

const unsubscribe = store.subscribe(() => {
    console.log("store changed!", store.getState());
})

store.dispatch({
    type: 'bugAdded',
    payload: {
        description: "BUG 1 "
    }
})

unsubscribe()

store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 1
    }
})
console.log(store.getState())