import Actions from '../../../resource/Actions';

const initialState = {
  products: [],
  errors: '',
};

const productReducer = (state = initialState, action) => {
  console.warn('productReducer', action.data);
  switch (action.type) {
    case Actions.FETCHING_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data,
        errors: '',
      };
    case Actions.FETCHING_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default productReducer;
