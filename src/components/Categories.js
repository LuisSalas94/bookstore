import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  const showStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="button" className="categories" onClick={showStatus}>
        Check Status
      </button>
      <span className="categories-span">{status}</span>
    </>
  );
};

export default Categories;
