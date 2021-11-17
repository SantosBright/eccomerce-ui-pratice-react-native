import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Categories from '../components/Categories';
import Trending from '../components/Trending';

export default function HomeScreen() {
  const [loading, setloading] = useState(true);
  const [products, setProduct] = useState([]);

  const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    setProduct(await res.json());
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Categories />
      <Trending products={products} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
