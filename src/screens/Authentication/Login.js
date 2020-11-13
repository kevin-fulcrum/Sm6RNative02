import React, {useRef, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Input from '../../components/core/Form/TextInput';

const styles = StyleSheet.create({
  labelStyle: {
    color: '#212121',
    fontWeight: 'bold',
  },
  textInput: {
    marginTop: 5,
    paddingBottom: 5,
    color: '#212121',
  },
});

const Login = () => {
  const [disable, setDisable] = useState(false);
  const [email, setEmail] = useState('');
  const emailInput = useRef();
  const onChange = (value, type) => {
    console.warn('emailInput', emailInput.current.state);
    if (type === 'email') {
      if (emailInput.current.state.validate) {
        setDisable(false);
      }
      setEmail(value);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Input
        ref={emailInput}
        label={'Email'}
        labelStyle={styles.labelStyle}
        value={email}
        type={'email'}
        placeholder={'your email...'}
        keyboardType="email-address"
        textInputStyle={styles.textInput}
        onChangeInput={(value) => onChange(value, 'email')}
      />
    </View>
  );
};

export default Login;
