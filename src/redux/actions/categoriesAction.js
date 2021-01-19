import Actions from '../../resource/Actions';
import {getCategories} from '../../resource/database/products';

const getCategoriesSuccess = (data) => {
  console.warn('getCategories success', data);
  return {
    type: Actions.FETCHING_CATEGORIES_SUCCESS,
    data,
  };
};

const getCategoriesFailure = (errors) => {
  return {
    type: Actions.FETCHING_CATEGORIES_FAILURE,
    errors,
  };
};

const getAllCategories = () => {
  return async (dispatch, getState) => {
    const categories = await getCategories();
    console.warn('getAllCategories', categories);
    if (categories.errors) {
      dispatch(getCategoriesFailure(categories.errors));
    } else {
      dispatch(getCategoriesSuccess(categories));
    }
  };
};

export default {
  getAllCategories,
};
