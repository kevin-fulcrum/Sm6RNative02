import React, {useRef, useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import Validator from '../../../resource/functions/Validator';

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    flexDirection: 'row',
  },
  helperTextStyle: {
    fontSize: 12,
    color: 'red',
    marginVertical: 5,
  },
  input: {
    opacity: 1,
  },
  message: {
    width: '100%',
  },
  opacity: {
    opacity: 0.5,
  },
});

const Input = ({
  editable,
  children,
  value,
  onChange,
  TextInputStyle,
  maxLength,
  placeholder,
  placeholderTextColor,
  onBlur,
  onFocus,
  TextInputRef,
  type,
  ...props
}) => {
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const [validate, setValidate] = useState('');
  const input = useRef(null);

  const ofRef = (ref) => {
    input.current = ref;
    TextInputRef && TextInputRef(ref);
  };
  const onBlurInput = () => {
    onBlur && onBlur();
  };
  const onFocusInput = () => {
    onFocus && onFocus();
  };
  const onChangeInput = (value) => {
    if (type) {
      if (value.trim() !== '') {
        if (Validator(type, value).error !== '') {
          setInputValue(value);
          setError(Validator(type, value).error);
          setValidate(false);
        } else {
          setInputValue(value);
          setError('');
          setValidate(true);
        }
      } else {
        setInputValue(value);
        setError('');
        setValidate(false);
      }
    }
    onChange && onChange(value);
  };
  return (
    <View
      style={editable ? styles.opacity : styles.input}
      pointerEvents={editable ? 'none' : 'auto'}>
      <TextInput
        {...props}
        ref={ofRef}
        value={value}
        placeholder={placeholder}
        onChange={onChangeInput}
        onBlur={onBlurInput}
        editable={editable}
        onFocus={onFocusInput}
        style={[TextInputStyle, styles.textInput]}
        maxLength={maxLength}
        placeholderTextColor={placeholderTextColor}
      />
      {error !== '' ? (
        <View style={styles.message}>
          <Text style={styles.helperTextStyle}>Error del campo</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Input;
