import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '..//Card/Card.jsx';
import { getStoreName } from '..//..//redux/actions/actions.js';

const Products = ({ list, storeName, getStoreName }) => {
  useEffect((props) => {
    getStoreName();
  },[getStoreName]);

  return (
    <div>
      <h1>{storeName}</h1>
      {list.map(product => (
        <Card key={product.id} id={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
    storeName: state.storeName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStoreName: () => dispatch(getStoreName())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);