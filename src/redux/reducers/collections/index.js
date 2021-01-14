import Actions from '../../../resource/Actions';

const initialState = {
  collections: [],
  errors: '',
};

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCHING_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.data,
        errors: '',
      };
    case Actions.FETCHING_COLLECTIONS_FAILURE:
      return {
        ...state,
        collections: [],
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default collectionsReducer;
