import React, {useReducer} from 'react'

const initialstate = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            return {
                ...state,
                secondCounter : state.secondCounter + action.value
            }

        case 'decrement':
            return {
                ...state,
                secondCounter : state.secondCounter - 1
            }
        
        case 'reset':
            return initialstate;
        
        default:
            return state;
    }
}

const UseReducer2 = () => {

    const [count, dispatch] = useReducer(reducer, initialstate);
    

    return (
        <div className="container">
            <h3 style={{textAlign: "center", marginBottom: "40px"}}>This is counter 2.</h3>
            <div className="counter-container">
                <div className="btn-sec">
                    <button onClick={() => dispatch({type: 'increment', value: 5})}>+</button>
                    <button onClick={() => dispatch({type: 'reset'})}>R</button>
                    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                </div>
                <div className="display-sec">
                    {count.secondCounter}
                </div>
            </div>
        </div>
    )
}

export default UseReducer2
