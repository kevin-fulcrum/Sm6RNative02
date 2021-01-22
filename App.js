/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Providers from './src/navigation/';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ReduxNetworkProvider} from 'react-native-offline';
import reduxStore from './src/redux/store';

const {store, persistor} = reduxStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReduxNetworkProvider>
          <Providers />
        </ReduxNetworkProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
