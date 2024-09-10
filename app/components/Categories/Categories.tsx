import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';

const Categories = () => {
  return (
    <FlatList
      style={styles.list}
      data={[]}
      renderItem={({item, index}) => (
        <View style={styles.container} key={index}>
          <Text style={styles.title}>Category1</Text>
        </View>
      )}
    />
  );
};

export default Categories;
