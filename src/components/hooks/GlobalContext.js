import React, {useReducer} from 'react'
import Component1 from './nestedcomps/Component1'
import Component2 from './nestedcomps/Component2'
import Component3 from './nestedcomps/Component3'

export const CountContext = React.createContext();

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


const GlobalContext = () => {

    const [count, dispatch] = useReducer(reducer, initialstate);

    return (

        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>

            <div className="container">
                Count - {count}

                <div className="comp-container">

                    <Component1 />
                    <Component2 />
                    <Component3 />
                
                </div>
            </div>
        
        </CountContext.Provider>
    )
}

export default GlobalContext
