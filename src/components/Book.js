import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, genre, id,
}) => {
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    toast.success('Book was deleted successfully!');
    dispatch(removeBook(id));
  };

  return (
    <div className="book-container">
      <div className="book-info">
        <h3 className="genre">{genre}</h3>
        <h1 className="title">{title}</h1>
        <h3 className="author">{author}</h3>
        <button type="button" className="btn" onClick={() => deleteBook(id)}>
          Remove
        </button>
      </div>
      <div className="book-status">
        <h4 className="percentage">64%</h4>
        <h4 className="status">Completed</h4>
      </div>
      <div className="book-progress">
        <h3>Current Chapter</h3>
        <h2 className="chapter">Chapter 17</h2>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
