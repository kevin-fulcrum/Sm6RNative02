import Actions from '../../../resource/Actions';

const initialState = {
  categories: [],
  errors: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCHING_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.data,
        errors: '',
      };
    case Actions.FETCHING_CATEGORIES_FAILURE:
      return {
        ...state,
        categories: [],
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
