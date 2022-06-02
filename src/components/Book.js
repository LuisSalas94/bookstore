import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ info }) => {
  const { genre, title, author } = info;

  return (
    <div className="book-container">
      <div className="book-info">
        <h3 className="genre">{genre}</h3>
        <h1 className="title">{title}</h1>
        <h3 className="author">{author}</h3>
        <button type="button" className="btn">Remove</button>
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
  info: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
