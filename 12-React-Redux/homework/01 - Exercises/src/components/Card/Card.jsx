import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '..//..//redux/actions/actions.js';

const Card = ({ id, name, price, deleteProduct }) => {
  const handleDelete = () => {
    deleteProduct(id);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(deleteProduct(id))
  };
};

export default connect(null, mapDispatchToProps)(Card);