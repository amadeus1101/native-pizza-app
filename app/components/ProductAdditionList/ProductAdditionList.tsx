import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {ProductAddition} from '../ProductAddition';

const ProductAdditionList = () => {
  return (
    <FlatList
      style={styles.list}
      data={[]}
      renderItem={({item, index}) => <ProductAddition key={index} />}
    />
  );
};

export default ProductAdditionList;
