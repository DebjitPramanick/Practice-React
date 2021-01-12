import redux from 'redux'
import reduxLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { buyPen, fetchUsers} from './Actions';
import { penReducer, pencilReducer } from "./Reducer"

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware; //Creating middleware
const logger = reduxLogger.createLogger();

//Combine multiple reducers

const rootReducer = combineReducers({
    pen: penReducer,
    pencil: pencilReducer
})

//Create store with reducer

const store = createStore(rootReducer, applyMiddleWare(logger));
console.log('Initial state', store.getState());


//Subscribe and unsubscribe to store
//Unscribe is the return value of subscribe method

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchUSers);


unsubscribe();