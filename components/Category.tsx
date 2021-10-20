import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Category = ({ number }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/category-1.png')}
        style={{ height: 270 }}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
