/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './src/components/core/Buttons/Button';

const App = () => {
  const onPress = () => {
    console.warn('onPress')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola a todos!</Text>
      <Button variant={'primary'} label={'Bienvenidos'} onPress={onPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

export default App;
