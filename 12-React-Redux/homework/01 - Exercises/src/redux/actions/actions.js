import axios from 'axios';
import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from './types';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id
});

export const getStoreName = () => {
    const URL = 'http://localhost:3001/store';
  return async function (dispatch) {
    let response = await axios.get(URL);
    dispatch({
      type: GET_STORE_NAME,
      payload: response.data
    });
  };
};