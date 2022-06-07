import React from 'react';
// components
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      <div className="books-container">
        {books.map((item) => (
          <Book
            title={item.title}
            author={item.author}
            genre={item.genre}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
      <Form />
    </>
  );
};

export default Books;
