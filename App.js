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
import {store, persistor} from './src/redux/store';

const getStore = store();

const App = () => {
  return (
    <Provider store={getStore}>
      <PersistGate loading={null} persistor={persistor}>
        <ReduxNetworkProvider>
          <Providers />
        </ReduxNetworkProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
