import React, { useContext, useEffect, useState } from 'react';
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
import { cartContext } from '../context/cartContext';
import { Product } from '../reducer/cart';
import { ACTIONS, COLORS } from '../constants';

interface Props {}

const SingleProductScreen = (props: Props) => {
  const route = useRoute();
  const { itemId } = route.params;
  const [product, setProduct] = useState<Product>({});
  const [loading, setLoading] = useState(true);
  const { disptachToCart, cartProducts } = useContext(cartContext);

  const getProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${itemId}`);
      setProduct(await res.json());
      setLoading(false);
    } catch (error: any) {
      Alert.alert(
        error.response ? error.response.data.message : 'Something went wrong'
      );
    }
  };

  const addToCart = () => {
    disptachToCart({ type: 'ADD_PRODUCT', payload: product });
    Alert.alert('Product has been added to cart');
  };

  const subAdd = () => {
    if (cartProducts.find(item => item.id === itemId)?.quantity === 1)
      Alert.alert('Product has been remove to cart');
    disptachToCart({ type: 'SUB_PRODUCT_QUANTITY', payload: product.id });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ScrollView>
      <View style={{ backgroundColor: COLORS.defaultBackground }}>
        <View
          style={{
            height: Dimensions.get('window').height * 0.6,
          }}
        >
          <Image
            style={{ height: '100%', width: '100%' }}
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
          {!loading &&
            (cartProducts.some(item => item.id === product.id) ? (
              <View style={styles.addSubBtns}>
                <TouchableOpacity
                  onPress={subAdd}
                  activeOpacity={0.8}
                  style={styles.subBtn}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>
                  x{cartProducts.find(item => item.id === product.id)?.quantity}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    disptachToCart({
                      type: ACTIONS.ADD_PRODUCT,
                      payload: product,
                    })
                  }
                  activeOpacity={0.8}
                  style={styles.addBtn}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                onPress={addToCart}
                activeOpacity={0.8}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Add To Bag</Text>
              </TouchableOpacity>
            ))}
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
    backgroundColor: COLORS.primaryColor,
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
  addSubBtns: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  subBtn: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
    paddingVertical: 15,
  },
  addBtn: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
    paddingVertical: 15,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 20,
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
