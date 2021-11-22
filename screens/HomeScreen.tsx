import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Alert,
  ActivityIndicator,
  View,
} from 'react-native';
import Categories from '../components/Categories';
import Trending from '../components/Trending';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      setProducts(await res.json());
      setLoading(false);
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
      {!loading ? (
        <Trending products={products} />
      ) : (
        <View
          style={{
            paddingTop: 80,
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator
            color='rgb(10, 149, 255)'
            style={{}}
            animating={true}
            size='large'
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
