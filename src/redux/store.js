import {createStore, combineReducers} from "redux"
// import {reducer} from './counter/reducer'
// import {reducerTodo} from './todo/reducer'
import { reducerTodo } from "./reducer";

const rootReducer=combineReducers({
    cart:reducerTodo
    // count:reducer,
    // todos:reducerTodo
})



export const store = createStore(rootReducer); 