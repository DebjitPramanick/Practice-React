import React, {useReducer} from 'react'
import MultipleReducers from './MultipleReducers';
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

const MulReducers = () => {

    const [count, dispatch] = useReducer(reducer, initialstate);
    const [count2, dispatch2] = useReducer(reducer, initialstate);

    return (
        <div className="container">
            <h3 style={{textAlign: "center", marginBottom: "40px"}}>This is counter 3.</h3>

            <div className="mul-container">

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

                <div className="counter-container">
                    <div className="btn-sec">
                        <button onClick={() => dispatch2('increment')}>+</button>
                        <button onClick={() => dispatch2('reset')}>R</button>
                        <button onClick={() => dispatch2('decrement')}>-</button>
                    </div>
                    <div className="display-sec">
                        {count2}
                    </div>
                </div>
            
            </div>

        </div>
    )
}

export default MulReducers
