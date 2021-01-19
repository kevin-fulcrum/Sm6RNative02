import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';
import productReducer from './products';
import categoriesReducer from './categories';
import collectionsReducer from './collections';
import cartReducer from './cart';
const getRootReducer = () => {
  return combineReducers({
    productReducer,
    categoriesReducer,
    collectionsReducer,
    cartReducer,
    network,
  });
};

export default getRootReducer;
