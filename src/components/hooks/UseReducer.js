import React, {useReducer} from 'react'
import MulReducers from './MultipleReducers';
import UseReducer2 from './UseReducer2';

const initialstate = 0;
const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state+1;

        case 'decrement':
            return state-1;
        
        case 'reset':
            return initialstate;
        
        default:
            return state;
    }
}

const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialstate);
    

    return (
        <div className="container">
            <h3 style={{textAlign: "center", marginBottom: "40px"}}>This is counter 1.</h3>
            <div className="counter-container">
                <div className="btn-sec">
                    <button onClick={() => dispatch('increment')}>+</button>
                    <button onClick={() => dispatch('reset')}>R</button>
                    <button onClick={() => dispatch('decrement')}>-</button>
                </div>
                <div className="display-sec">
                    {count}
                </div>
            </div>

            <UseReducer2 />

            <MulReducers />
        </div>
    )
}

export default UseReducer
