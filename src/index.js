import React from 'react';
import ReactDOM from 'react-dom';


//Import CSS file

import './index.css'

//Set up vars

const books = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg",
    title: "Eating in the Age of Dieting: A collection of notes and essays from over the years",
    author: "Rujuta Diwekar",
    price: "₹321.00"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/41gBLwftOSL._AC_SX184_.jpg",
    title: "Shuggie Bain: Winner of Booker Prize 2020",
    author: "Douglas Stuart",
    price: "₹316.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41dElS3Q0mL._SX324_BO1,204,203,200_.jpg",
    title: "The Archer",
    author: "Paulo Coelho",
    price: "₹145.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41a+W3AFhyL._SX360_BO1,204,203,200_.jpg",
    title: "Portraits of Power: Half a Century of Being at Ringside",
    author: "N.K. Singh",
    price: "₹396.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51ExYzLZs1L._SX418_BO1,204,203,200_.jpg",
    title: "Harry Potter and the Prisoner of Azkaban ",
    author: "J.K. Rowling",
    price: "₹690.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51ka6kZlAIL._SX322_BO1,204,203,200_.jpg",
    title: "Why Not Me? A Feeling of Millions ",
    author: "Anubhav Agrawal",
    price: "₹159.00"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg",
    title: "The Hitman: The Rohit Sharma Story ",
    author: "Vijay Lokapally",
    price: "₹374.00"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg",
    title: "Eating in the Age of Dieting: A collection of notes and essays from over the years",
    author: "Rujuta Diwekar",
    price: "₹321.00"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/41gBLwftOSL._AC_SX184_.jpg",
    title: "Shuggie Bain: Winner of Booker Prize 2020",
    author: "Douglas Stuart",
    price: "₹316.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41dElS3Q0mL._SX324_BO1,204,203,200_.jpg",
    title: "The Archer",
    author: "Paulo Coelho",
    price: "₹145.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41a+W3AFhyL._SX360_BO1,204,203,200_.jpg",
    title: "Portraits of Power: Half a Century of Being at Ringside",
    author: "N.K. Singh",
    price: "₹396.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51ExYzLZs1L._SX418_BO1,204,203,200_.jpg",
    title: "Harry Potter and the Prisoner of Azkaban ",
    author: "J.K. Rowling",
    price: "₹690.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51ka6kZlAIL._SX322_BO1,204,203,200_.jpg",
    title: "Why Not Me? A Feeling of Millions ",
    author: "Anubhav Agrawal",
    price: "₹159.00"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg",
    title: "The Hitman: The Rohit Sharma Story ",
    author: "Vijay Lokapally",
    price: "₹374.00"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg",
    title: "Eating in the Age of Dieting: A collection of notes and essays from over the years",
    author: "Rujuta Diwekar",
    price: "₹321.00"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/41gBLwftOSL._AC_SX184_.jpg",
    title: "Shuggie Bain: Winner of Booker Prize 2020",
    author: "Douglas Stuart",
    price: "₹316.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41dElS3Q0mL._SX324_BO1,204,203,200_.jpg",
    title: "The Archer",
    author: "Paulo Coelho",
    price: "₹145.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41a+W3AFhyL._SX360_BO1,204,203,200_.jpg",
    title: "Portraits of Power: Half a Century of Being at Ringside",
    author: "N.K. Singh",
    price: "₹396.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51ExYzLZs1L._SX418_BO1,204,203,200_.jpg",
    title: "Harry Potter and the Prisoner of Azkaban ",
    author: "J.K. Rowling",
    price: "₹690.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51ka6kZlAIL._SX322_BO1,204,203,200_.jpg",
    title: "Why Not Me? A Feeling of Millions ",
    author: "Anubhav Agrawal",
    price: "₹159.00"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg",
    title: "The Hitman: The Rohit Sharma Story ",
    author: "Vijay Lokapally",
    price: "₹374.00"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg",
    title: "Eating in the Age of Dieting: A collection of notes and essays from over the years",
    author: "Rujuta Diwekar",
    price: "₹321.00"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/41gBLwftOSL._AC_SX184_.jpg",
    title: "Shuggie Bain: Winner of Booker Prize 2020",
    author: "Douglas Stuart",
    price: "₹316.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41dElS3Q0mL._SX324_BO1,204,203,200_.jpg",
    title: "The Archer",
    author: "Paulo Coelho",
    price: "₹145.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41a+W3AFhyL._SX360_BO1,204,203,200_.jpg",
    title: "Portraits of Power: Half a Century of Being at Ringside",
    author: "N.K. Singh",
    price: "₹396.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51ExYzLZs1L._SX418_BO1,204,203,200_.jpg",
    title: "Harry Potter and the Prisoner of Azkaban ",
    author: "J.K. Rowling",
    price: "₹690.00"
  }
  ,
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51ka6kZlAIL._SX322_BO1,204,203,200_.jpg",
    title: "Why Not Me? A Feeling of Millions ",
    author: "Anubhav Agrawal",
    price: "₹159.00"
  }
  ,
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/31970VMFv5L._AC_SX184_.jpg",
    title: "The Hitman: The Rohit Sharma Story ",
    author: "Vijay Lokapally",
    price: "₹374.00"
  }
  ,
  
  
]


function Booklist(){
  return (
  <section className="booklist">
    {books.map((book) => {
      return <Book book={book}/>
    })}
  </section>
  );
}

const Book = (props) =>{
  return(
    <article className="bookcards">
      <div className="bookimage"><img  src={props.book.img} alt=""/></div>
      <a className="bookname" href="#">{props.book.title}</a>
      <p className="bookauthor" >{props.book.author}</p>
      <p className="bookprice" >{props.book.price}</p>
      <button className="buybtn" >Buy</button>
    </article>
  )
}


ReactDOM.render(<Booklist/>,document.getElementById('root'));
