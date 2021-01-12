import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increase = (e) =>{
        e.preventDefault();
        setCount(count + 1);
    }

    const decrease = (e) =>{
        e.preventDefault();
        setCount(count - 1);
    }

    const reset = (e) =>{
        e.preventDefault();
        setCount(0);
    }

    return (
        <div className="container">
            <h1 className="display">{count}</h1>
            <div className="btn-container">
                <button className="btn" onClick={decrease}>-1</button>
                <button className="btn" onClick={reset}>Reset</button>
                <button className="btn" onClick={increase}>+1</button>
            </div>
        </div>
    )
}

export default Counter
