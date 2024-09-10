import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {styles} from './styles';

const CartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.image}>
          <Image source={{uri: '#'}} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Header</Text>
          <Text style={styles.description}>Description</Text>
        </View>
      </View>
      <View style={styles.params}>
        <Text style={styles.price}>123 $</Text>
        <View style={styles.counter}>
          <Button title="-" />
          <Text style={styles.counterValue}>1</Text>
          <Button title="+" />
        </View>
      </View>
    </View>
  );
};

export default CartItem;
