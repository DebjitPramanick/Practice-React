import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyPen, buyPencil } from './Actions';

const Redux = () => {

    const [pen,setPen] = useState(0);

    const penNum = useSelector(state => state.pen.penNum);
    const pencilNum = useSelector(state => state.pencil.pencilNum);

    const dispatch = useDispatch();

    return (
        <div className="container grid-container">
            <div className="field">
                <div className="display">
                    Num of pens : {penNum} 
                </div>
                <input type="number" className="simple-input"
                onChange={(e) => setPen(e.target.value)}></input>
                <button className="btn"
                onClick={() => dispatch(buyPen())}>
                    Buy Pen
                </button>
            </div>

            <div className="field">
                <div className="display">
                    Num of pencils : {pencilNum}
                </div>
                <button className="btn"
                onClick={() => dispatch(buyPencil())}>
                    Buy Pencils
                </button>
            </div>
            
        </div>
    )
}

export default Redux
