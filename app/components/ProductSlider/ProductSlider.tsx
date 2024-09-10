import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const ProductSlider = () => {
  return (
    <FlatList
      style={styles.slider}
      data={[...new Array(3)]}
      renderItem={({item, index}) => (
        <View style={styles.container} key={index}>
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
      )}
    />
  );
};

export default ProductSlider;
