import Actions from '../../../resource/Actions';

const initialState = {
  orders: [],
  errors: '',
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCHING_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.data,
        errors: '',
      };
    case Actions.FETCHING_ORDERS_FAILURE:
      return {
        ...state,
        orders: [],
        errors: action.errors,
      };
    case Actions.SET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.data,
        errors: '',
      };
    case Actions.SET_ORDERS_FAILURE:
      return {
        ...state,
        orders: [],
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default ordersReducer;
