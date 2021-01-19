import Actions from '../../../resource/Actions';

const initialState = {
  cart: [],
  success: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_CART_PRODUCTS:
      return {
        ...state,
        cart: action.data,
        success: true,
      };
    case Actions.GET_CART_PRODUCTS:
      return {
        ...state,
        cart: action.data,
        success: true,
      };
    case Actions.REMOVE_CART_BY_ID_PRODUCTS:
      return {
        ...state,
        cart: action.data,
      };

    default:
      return state;
  }
};

export default cartReducer;
