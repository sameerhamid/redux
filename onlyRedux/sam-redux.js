const redux = require('redux');


const INITIAL_VALUE = {
  counter: 0
}

const reducer = (store = INITIAL_VALUE, action) => {
  console.log("reducer called", action.type);
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = store.counter + 1
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