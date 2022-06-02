import React from 'react';

const Form = () => (
  <form className="form">
    <h1>Add a new book</h1>
    <input type="text" name="book" placeholder="Book Title" />
    <input type="text" name="book" placeholder="Author" />
    <select name="" id="">
      <option value="category">Category</option>
    </select>
    <input type="submit" />
  </form>
);

export default Form;
