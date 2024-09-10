import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const CartCheck = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.promo}>
        <Text style={styles.promoText}>Promo</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.contentRow}>
          <Text style={styles.contentValue}>Total</Text>
          <Text style={styles.contentValue}>-12%</Text>
        </View>
      </View>
    </View>
  );
};

export default CartCheck;
