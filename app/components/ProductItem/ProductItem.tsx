import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const ProductItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{uri: '#'}} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Header</Text>
        <Text style={styles.description}>Description</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;
