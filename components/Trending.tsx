import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import TrendingItem from './TrendingItem';
import { trendingData } from '../data';

interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

interface TrendingProps {
  products: Product[];
}

const Trending = ({ products }: TrendingProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending</Text>
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 15,
        }}
        keyExtractor={item => new Date().toString() + item.id}
        renderItem={({ item }) => <TrendingItem item={item} />}
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 25,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'barlow-regular',
  },
});
