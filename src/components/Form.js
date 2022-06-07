import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const id = v4();

  const submitBook = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      id,
      genre: 'Action',
    };
    if (title && author) {
      toast.success('Book was created successfully!');
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    } else {
      toast.warning('All inputs must be filled!');
    }
  };

  return (
    <form className="form" onSubmit={submitBook}>
      <h1>Add a new book</h1>
      <input
        type="text"
        name="book"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="book"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select name="" id="">
        <option value="category">Category</option>
      </select>
      <input type="submit" />
    </form>
  );
};

export default Form;
