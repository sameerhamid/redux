import { createStore } from 'redux'

const INITIAL_VALUE = {
  counter: 0
}


const counterReducer = (store = INITIAL_VALUE, action) => {
  let newConter = store;
  if (action.type === "INCREMENT") {
    newConter = { counter: store.counter + 1 }
  } else if (action.type === "DECREMENT") {
    newConter = { counter: store.counter - 1 }
  } else if (action.type === "ADD") {
    console.log(action.payload.num);
    newConter = { counter: store.counter + Number(action.payload.num) }
  } else if (action.type === "SUB") {
    newConter = { counter: store.counter - Number(action.payload.num) }
  }
  return newConter
}


const counterStore = createStore(counterReducer)


export default counterStore