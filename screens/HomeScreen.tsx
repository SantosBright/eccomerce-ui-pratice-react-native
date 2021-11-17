import React, { useEffect, useState, Alert } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Categories from '../components/Categories';
import Trending from '../components/Trending';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      setProducts(await res.json());
    } catch (error: any) {
      Alert.alert(
        error.response ? error.response.data.message : 'Something went wrong'
      );
    }
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
