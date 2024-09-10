import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const ProductAddition = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: '#'}} style={styles.image} />
      <Text style={styles.title}>name</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductAddition;
