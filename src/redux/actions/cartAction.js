import Actions from '../../resource/Actions';

const setCartSuccess = (data) => {
  return {
    type: Actions.SET_CART_PRODUCTS,
    data,
  };
};

const getCartSuccess = (data) => {
  return {
    type: Actions.GET_CART_PRODUCTS,
    data,
  };
};

const unsetCartProductById = (data) => {
  return {
    type: Actions.REMOVE_CART_BY_ID_PRODUCTS,
    data,
  };
};

const removeCartProductById = (id) => {
  return async (dispatch, getState) => {
    const cartProducts = await getState().cartReducer.cart;
    let cart = cartProducts.filter((product) => {
      return product.id !== id;
    });
    dispatch(unsetCartProductById(cart));
  };
};

const setCartProduct = (data) => {
  return async (dispatch, getState) => {
    const product = await getState().cartReducer.cart;
    if (product.length >= 0) {
      const cartProducts = product.concat(data);
      dispatch(setCartSuccess(cartProducts));
    }
  };
};

const getCartProduct = () => {
  return async (dispatch, getState) => {
    const products = await getState().cartReducer.cart;
    dispatch(getCartSuccess(products));
  };
};

export default {
  setCartProduct,
  getCartProduct,
  removeCartProductById,
};
