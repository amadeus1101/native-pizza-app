import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {ProductItem} from '../ProductItem';

const ProductItemList = () => {
  return (
    <FlatList
      data={[]}
      renderItem={({item, index}) => <ProductItem key={index} />}
    />
  );
};

export default ProductItemList;
