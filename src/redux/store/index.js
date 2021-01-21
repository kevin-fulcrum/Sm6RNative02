import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware, compose} from 'redux';
import {createNetworkMiddleware} from 'react-native-offline';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import getRootReducer from '../reducers';

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cartReducer'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, getRootReducer());

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    persistedReducer,
    undefined,
    componseEnhancer(applyMiddleware(networkMiddleware, createLogger(), thunk)),
  );

  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};
