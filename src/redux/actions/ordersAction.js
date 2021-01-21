import Actions from '../../resource/Actions';
import Api from '../../api/ordersApi';

const getOrderSuccess = (data) => {
  return {
    type: Actions.FETCHING_ORDERS_SUCCESS,
    data,
  };
};

const getOrderFailure = (errors) => {
  return {
    type: Actions.FETCHING_ORDERS_FAILURE,
    errors,
  };
};

const setOrderSuccess = (data) => {
  return {
    type: Actions.SET_ORDERS_SUCCESS,
    data,
  };
};

const setOrderFailure = (errors) => {
  return {
    type: Actions.SET_ORDERS_FAILURE,
    errors,
  };
};

const getOrders = () => {
  return async (dispatch, getState) => {
    const result = await Api.getOrders();
    if (result.errors) {
      dispatch(getOrderFailure(result.errors));
    } else {
      dispatch(getOrderSuccess(result));
    }
  };
};

const setOrders = (data) => {
  return async (dispatch, getState) => {
    const result = await Api.createOrder(data);
    if (result.errors) {
      dispatch(setOrderFailure(result.errors));
    } else {
      dispatch(setOrderSuccess(result));
    }
  };
};

export default {
  getOrders,
  setOrders,
};
