import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const removeBook = (id) => {
    toast.success('Book was deleted successfully!');
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-container">
      <div className="book-info">
        <h3 className="genre">Action</h3>
        <h1 className="title">{title}</h1>
        <h3 className="author">{author}</h3>
        <ul>
          <li>
            <button type="button" className="btn">
              Comments
            </button>
          </li>
          <li className="line"> </li>
          <li>
            <button
              type="button"
              className="btn"
              onClick={() => removeBook(id)}
            >
              Remove
            </button>
          </li>
          <li className="line"> </li>
          <li>
            <button type="button" className="btn">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="book-status">
        <div className="progress">
          <span
            className="title timer"
            data-from="0"
            data-to="65"
            data-speed="1800"
          />
          <div className="overlay" />
          <div className="left" />
          <div className="right" />
        </div>
        <div className="status">
          <h4 className="percentage">85%</h4>
          <h4 className="status">Completed</h4>
        </div>
        <div className="line-2" />
      </div>

      <div className="book-progress">
        <ul className="current">
          <li>
            <h3>current</h3>
          </li>
          <li>
            <h3>chapter</h3>
          </li>
        </ul>
        <h2 className="chapter">Chapter 17</h2>
        <button type="button" className="bookstore-btn">
          Update Progress
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
