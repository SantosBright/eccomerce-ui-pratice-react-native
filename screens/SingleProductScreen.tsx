import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

interface Props {}

interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

const SingleProductScreen = (props: Props) => {
  const route = useRoute();
  const { itemId } = route.params;
  const [product, setProduct] = useState<Product>({});

  const getProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${itemId}`);
      setProduct(await res.json());
    } catch (error: any) {
      Alert.alert(
        error.response ? error.response.data.message : 'Something went wrong'
      );
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#F2F2F2' }}>
        <View>
          <Image
            height={Dimensions.get('window').height * 0.6}
            resizeMode='contain'
            source={{ uri: product?.image }}
          />
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity style={styles.likeBtn}>
            <Image source={require('../assets/like.png')} />
          </TouchableOpacity>
          <Text style={styles.price}>${product?.price}</Text>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.buttonText}>Add To Bag</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleProductScreen;

const styles = StyleSheet.create({
  price: {
    color: '#B02B2B',
    fontSize: 20,
    fontFamily: 'barlow',
  },
  title: {
    fontSize: 22,
    marginBottom: 4,
    marginTop: 5,
    fontWeight: '400',
    fontFamily: 'barlow-regular',
  },
  description: {
    fontSize: 14,
    fontFamily: 'barlow',
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    marginTop: 10,
  },
  textContainer: {
    padding: 15,
    paddingVertical: 20,
    position: 'relative',
    backgroundColor: 'white',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  likeBtn: {
    backgroundColor: 'white',
    width: 58,
    height: 58,
    borderRadius: 58 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 30,
    top: -(58 / 2),
  },
});
