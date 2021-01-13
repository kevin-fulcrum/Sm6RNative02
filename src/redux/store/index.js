import {createStore, applyMiddleware, compose} from 'redux';
import {createNetworkMiddleware} from 'react-native-offline';
import thunk from 'redux-thunk';
import getRootReducer from '../reducers';

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = () => {
  return createStore(
    getRootReducer(),
    undefined,
    componseEnhancer(applyMiddleware(networkMiddleware, thunk)),
  );
};

export default config;
