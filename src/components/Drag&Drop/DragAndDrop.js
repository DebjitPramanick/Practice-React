import React from 'react'
import Board from './Board'
import Cards from './Cards'

const DragAndDrop = () => {
    return (
        <div className="container">
            <div className="field-container">
                <Board id="board-1" className="field">
                    <Cards id="card-1" className="draggable-card"
                    draggable="true">
                        <p>Card 1</p>
                    </Cards>

                    <Cards id="card-3" className="draggable-card"
                    draggable="true">
                        <p>Card 1</p>
                    </Cards>
                </Board>

                <Board id="board-2" className="field">
                    <Cards id="card-2" className="draggable-card"
                    draggable="true">
                        <p>Card 2</p>
                    </Cards>
                </Board>
            </div>
        </div>
    )
}

export default DragAndDrop
