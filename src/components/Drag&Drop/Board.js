import React from 'react'

const Board = (props) => {

    const drop = (e) => {
        e.preventDefault();
        const cardID = e.dataTransfer.getData('cardID');

        const card = document.getElementById(cardID);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    return (
        <div className={props.className} id={props.id}
        onDrop={drop}
        onDragOver={dragOver}>
            {props.children}
        </div>
    )
}

export default Board
