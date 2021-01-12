import React from 'react'

const Cards = (props) => {

    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData("cardID", target.id);

        setTimeout(()=>{
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div id={props.id}
        className={props.className}
        onDragStart={dragStart}
        draggable={props.draggable}
        onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Cards
