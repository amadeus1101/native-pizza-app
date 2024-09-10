import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const SumButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={{uri: '#'}} style={styles.buttonImage} />
      <Text style={styles.buttonText}>123 $</Text>
    </TouchableOpacity>
  );
};

export default SumButton;
