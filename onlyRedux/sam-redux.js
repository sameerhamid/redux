const redux = require('redux');


const INITIAL_VALUE = {
  counter: 0
}

const reducer = (store = INITIAL_VALUE, action) => {
  console.log("reducer called", action.type);
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 }
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 }
  } else if (action.type === "ADDATION") {
    newStore = { counter: store.counter + action.payload.num }
  }
  return newStore
}

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
}


store.subscribe(subscriber)

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'ADDATION', payload: { num: 7 } })