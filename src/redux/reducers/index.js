import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';
import productReducer from './products';

const getRootReducer = () => {
  return combineReducers({
    productReducer,
    network,
  });
};

export default getRootReducer;
