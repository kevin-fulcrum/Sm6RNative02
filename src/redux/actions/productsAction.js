import Actions from '../../resource/Actions';
import {getProducts} from '../../resource/database/products';

const getProductsSuccess = (data) => {
  console.warn('getProductsSuccess', data);
  return {
    type: Actions.FETCHING_PRODUCTS_SUCCESS,
    data,
  };
};

const getProductsFailure = (errors) => {
  return {
    type: Actions.FETCHING_PRODUCTS_FAILURE,
    errors,
  };
};

const getAllProducts = () => {
  return async (dispatch, getState) => {
    const products = await getProducts();
    console.warn('getAllProducts', products);
    if (products.errors) {
      dispatch(getProductsFailure(products.errors));
    } else {
      dispatch(getProductsSuccess(products));
    }
  };
};

export default {
  getAllProducts,
};
