import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import Button from '../../components/core/Buttons/Button';
import Input from '../../components/core/Form/TextInput';
import Switch from '../../components/core/Form/SwitchCustom';

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
    paddingHorizontal: 26,
    paddingBottom: 10,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    fontSize: 15,
    color: '#212121',
  },
  title: {
    fontSize: 18,
    color: '#212121',
    textAlign: 'center',
    marginVertical: 15,
  },
  labelStyle: {
    color: '#212121',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subLabelStyle: {
    marginTop: 5,
  },
  textInput: {
    marginTop: 5,
    paddingBottom: 5,
    color: '#212121',
  },
});

const Login = () => {
  const [disable, setDisable] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usernameInput = useRef();
  const passwordInput = useRef();
  const onChange = (value, type) => {
    if (type === 'username') {
      if (usernameInput.current.state.validate) {
        setDisable(false);
      }
      setUsername(value);
    }
    if (type === 'password') {
      if (passwordInput.current.state.validate) {
        setDisable(false);
      }
      setPassword(value);
    }
  };
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
          <Text style={styles.title}>Login</Text>
          <ScrollView style={{flex: 1}}>
            <Input
              ref={usernameInput}
              label={'Username'}
              labelStyle={styles.labelStyle}
              value={username}
              type={'username'}
              placeholder={'myuser2020'}
              textInputStyle={styles.textInput}
              onChangeInput={(value) => onChange(value, 'username')}
            />
            <Input
              ref={passwordInput}
              label={'Password'}
              labelStyle={styles.labelStyle}
              value={password}
              type={'password'}
              placeholder={'********'}
              textInputStyle={styles.textInput}
              secureTextEntry
              onChangeInput={(value) => onChange(value, 'password')}
            />
            <View style={styles.buttonContainer}>
              <Button variant="primary" label="Continue" />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Login;
