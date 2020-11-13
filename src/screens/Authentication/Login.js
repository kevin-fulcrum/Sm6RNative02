import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import Input from '../../components/core/Form/TextInput';

const Login = () => {
  const [disable, setDisable] = useState(false);
  const [email, setEmail] = useState('');
  const emailValue = useRef('');
  const onChangeText = (value, type) => {
    if (type === 'email') {
      if (emailValue.current.validate) {
        setDisable(false);
      }
      setEmail(value);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Input
        value={email}
        ref={emailValue}
        type={'email'}
        placeholder={'your email...'}
        keyboardType="email-address"
        onChange={(value) => onChangeText(value, 'email')}
      />
    </View>
  );
};

export default Login;
