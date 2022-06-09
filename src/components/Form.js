import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { postBook } from '../redux/books/books';

const genres = ['Action', 'Adventure', 'Drama', 'Fantasy', 'Horror', 'Mystery'];

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
      item_id: id,
      category: 'ACTION',
    };

    if (title && author) {
      toast.success('Book was created successfully!');
      dispatch(postBook(newBook));
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
      <select name="genre">
        {genres.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <input type="submit" />
    </form>
  );
};

export default Form;
