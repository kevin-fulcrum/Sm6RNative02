import React from 'react';
import {View, Image, Dimensions, StyleSheet, Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import Button from '../../components/core/Buttons/Button';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  imageContainer: {
    flex: 1,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  welcome: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  border: {
    backgroundColor: '#2CB9B0',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7F9F7',
    width: 245,
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
  },
  button: {
    fontSize: 15,
    color: '#212121',
  },
  title1: {fontSize: 24, color: '#212121'},
  title2: {
    fontSize: 18,
    color: '#212121',
    lineHeight: 30,
    textAlign: 'center',
  },
});

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1604772659841-a1612db7000f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=420&q=80',
          }}
          style={{width: width, height: (width * 120) / 100}}
        />
      </View>
      <View style={{flex: 1, borderTopLeftRadius: 20}}>
        <View style={styles.border} />
        <View style={styles.welcome}>
          <Text style={styles.title1}>Let's get started</Text>
          <Text style={styles.title2}>
            Login to your account below or signup for an amazing experience
          </Text>
          <Button variant="primary" label="Have an account? Login" />
          <Button label="Join us, it's free" />
          <BorderlessButton style={styles.buttonContainer}>
            <Text style={styles.button}>Forgot password</Text>
          </BorderlessButton>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
