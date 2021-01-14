import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';
import productReducer from './products';
import categoriesReducer from './categories';
import collectionsReducer from './collections';

const getRootReducer = () => {
  return combineReducers({
    productReducer,
    categoriesReducer,
    collectionsReducer,
    network,
  });
};

export default getRootReducer;
