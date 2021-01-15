import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyPen, buyPencil } from './Actions';

const Redux = () => {

    const [pen,setPen] = useState(0);
    const [pencil,setPencil] = useState(0);

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
                value={pen}
                onChange={(e) => setPen(e.target.value)}>
                </input>
                <button className="btn"
                onClick={() => dispatch(buyPen(pen))}
                disabled = {pen>0? false : true}>
                    Buy {pen} Pens
                </button>
            </div>

            <div className="field">
                <div className="display">
                    Num of pencils : {pencilNum}
                </div>
                <input type="number" className="simple-input"
                value={pencil}
                onChange={(e) => setPencil(e.target.value)}>
                </input>
                <button className="btn"
                onClick={() => dispatch(buyPencil(pencils))}
                disabled = {pencil>0? false : true}>
                    Buy {pencil} Pencils
                </button>
            </div>
            
        </div>
    )
}

export default Redux
