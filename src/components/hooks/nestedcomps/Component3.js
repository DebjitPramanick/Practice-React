import React, {useContext} from 'react'
import {CountContext} from '../GlobalContext'

const Component3 = () => {

    const context = useContext(CountContext);

    return (
        <div>
            <h3 style={{textAlign: "center", marginBottom: "40px"}}>This is Component3.</h3>
            <div className="counter-container">
                <div className="btn-sec">
                    <button onClick={() => context.countDispatch('increment')}>+</button>
                    <button onClick={() => context.countDispatch('reset')}>R</button>
                    <button onClick={() => context.countDispatch('decrement')}>-</button>
                </div>
                <div className="display-sec">
                    {context.countState}
                </div>
            </div>
        </div>
    )
}

export default Component3
