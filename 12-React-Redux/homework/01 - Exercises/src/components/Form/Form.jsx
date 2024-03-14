import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '..//..//redux/actions/actions.js';

const Form = ({ addProduct }) => {
  const [product, setProduct] = useState({ name: '', price: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (product.name && product.price) {
      addProduct({ ...product, id: Date.now() });
      setProduct({ name: '', price: '' });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} />
      <input type="number" name="price" placeholder="Product Price" value={product.price} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
};



export const ConnectedForm = connect(null, mapDispatchToProps)(Form);
export function mapStateToProps(state) {
  return {
    productList: state.list
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addProduct: (product) => dispatch(addProduct(product))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);