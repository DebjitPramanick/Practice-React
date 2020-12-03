import React from 'react';
import ReactDOM from 'react-dom';


//Import CSS file

import './index.css'

function Booklist(){
  return (
  <section className="booklist">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
  );
}

const Book = () =>{
  return(
    <article className="bookcards">
      <BookImage/>
      <Title/>
      <Author/>
      <Price/>
    </article>
  )
}

const BookImage = () =>{return <div className="bookimage"><img  src="https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg" alt=""/></div>}
const Title = () =>{return <a className="bookname" href="#">Eating in the Age of Dieting: A collection of notes and essays from over the years</a>}
const Author =() =>{return <p className="bookauthor" >Paperback</p>}
const Price = () =>{return <p className="bookprice" >$180.00</p>}

ReactDOM.render(<Booklist/>,document.getElementById('root'));
