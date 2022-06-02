import React from 'react';
// components
import Book from './Book';
import Form from './Form';

const Books = () => {
  const booksList = [
    {
      id: 1,
      genre: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      genre: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      genre: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];

  return (
    <>
      <div className="books-container">
        {booksList.map((item) => (
          <Book info={item} key={item.id} />
        ))}
      </div>
      <Form />
    </>
  );
};

export default Books;
