import React from 'react'

const Book = (props) =>{

  const clickEvent = () =>{
    alert("You have successfully bought the book.")
  }

  return(
    <article className="bookcards">
      <div className="bookimage"><img  src={props.book.img} alt=""/></div>
      <a className="bookname" href="#">{props.book.title}</a>
      <p className="bookauthor" >{props.book.author}</p>
      <p className="bookprice" >{props.book.price}</p>
      <button className="buybtn" onClick={clickEvent}>Buy</button>
    </article>
  )
}

export default Book
