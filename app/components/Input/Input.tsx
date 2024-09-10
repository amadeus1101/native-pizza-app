import React from 'react';
import {KeyboardAvoidingView, TextInput, View} from 'react-native';
import {styles} from './styles';

const Input = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput style={styles.input} />
    </KeyboardAvoidingView>
  );
};

export default Input;
