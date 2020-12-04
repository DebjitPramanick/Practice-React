import React from 'react';
import ReactDOM from 'react-dom';

//Import CSS file
import './index.css'

//Importing book data
import {books} from './books'

//Importing Book comonent
import Book from './Book'


function Booklist(){
  return (
  <section className="booklist">
    {books.map((book) => {
      return <Book key={book.id} book={book}/>
    })}
  </section>
  );
}


ReactDOM.render(<Booklist/>,document.getElementById('root'));
