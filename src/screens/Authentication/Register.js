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

const Register = () => {
  const [disable, setDisable] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const emailInput = useRef();
  const usernameInput = useRef();
  const phoneInput = useRef();
  const countryInput = useRef();
  const onChange = (value, type) => {
    if (type === 'email') {
      if (emailInput.current.state.validate) {
        setDisable(false);
      }
      setEmail(value);
    }
    if (type === 'username') {
      if (usernameInput.current.state.validate) {
        setDisable(false);
      }
      setUsername(value);
    }
    if (type === 'phone') {
      if (phoneInput.current.state.validate) {
        setDisable(false);
      }
      setPhone(value);
    }
  };
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
          <Text style={styles.title}>Register</Text>
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
              ref={emailInput}
              label={'Email'}
              labelStyle={styles.labelStyle}
              value={email}
              type={'email'}
              placeholder={'example@gmail.com'}
              keyboardType="email-address"
              textInputStyle={styles.textInput}
              onChangeInput={(value) => onChange(value, 'email')}
            />
            <Input
              ref={phoneInput}
              label={'Phone Number'}
              labelStyle={styles.labelStyle}
              value={phone}
              type={'phone'}
              placeholder={'+5199999999'}
              keyboardType="phone-pad"
              textInputStyle={styles.textInput}
              onChangeInput={(value) => onChange(value, 'phone')}
            />
            <Switch
              label={'gender'}
              trackColor={{false: 'rgba(12,13,52, 0.05)', true: '#2CB9B0'}}
              thumbColor={'#f4f3f4'}
              iosBackgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              labelStyle={styles.labelStyle}
              subLabelStyle={styles.subLabelStyle}
              value={isEnabled}
              subLabel={isEnabled ? 'Male' : 'Female'}
            />
            <Input
              ref={countryInput}
              label={'Country'}
              labelStyle={styles.labelStyle}
              value={country}
              type={'country'}
              placeholder={'Peru'}
              textInputStyle={styles.textInput}
              onChangeInput={(value) => onChange(value, 'country')}
            />
            <View style={styles.buttonContainer}>
              <Button variant="primary" label="Register Now!" />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Register;
