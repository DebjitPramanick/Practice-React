import {createStore, combineReducers} from 'redux'
import { penReducer, pencilReducer } from "./Reducer"

//const combineReducers = redux.combineReducers;
//const applyMiddleWare = redux.applyMiddleware; //Creating middleware
//const logger = reduxLogger.createLogger();

//Combine multiple reducers

const rootReducer = combineReducers({
    pen: penReducer,
    pencil: pencilReducer
})

//Create store with reducer

const store = createStore(rootReducer);


//Subscribe and unsubscribe to store
//Unscribe is the return value of subscribe method

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


unsubscribe();


export default store