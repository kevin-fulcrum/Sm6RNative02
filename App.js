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
import {ReduxNetworkProvider} from 'react-native-offline';
import getStore from './src/redux/store';

const store = getStore();

const App = () => {
  return (
    <Provider store={store}>
      <ReduxNetworkProvider>
        <Providers />
      </ReduxNetworkProvider>
    </Provider>
  );
};

export default App;
