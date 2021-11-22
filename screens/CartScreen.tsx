import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';
import CartCard from '../components/CartCard';
import { COLORS } from '../constants';
import { cartContext } from '../context/cartContext';
import { cartData } from '../data';
import cartReducer from '../reducer/cart';

interface Props {}

const CartScreen = (props: Props) => {
  const { disptachToCart, cartProducts } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    cartProducts.forEach(item => {
      setTotal(prev => prev + Math.floor(item.price * item.quantity));
    });
  }, [cartProducts]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Cart</Text>
        <FlatList
          data={cartProducts}
          renderItem={({ item }) => <CartCard product={item} />}
        />
      </View>
      <View style={styles.totalContainer}>
        <View style={styles.totalHead}>
          <Text style={styles.totalHeading}>Total</Text>
          <Text style={styles.price}>${total}</Text>
        </View>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.clear();
            disptachToCart({ type: 'CLEAR_PRODUCTS' });
            setTotal(0);
            Alert.alert('Cart has been clear');
          }}
          activeOpacity={0.8}
          style={styles.checkoutBtn}
        >
          <Text style={styles.btnText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontFamily: 'barlow-regular',
    marginVertical: 30,
    marginBottom: 40,
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.defaultBackground,
  },
  totalContainer: {
    backgroundColor: 'white',
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  totalHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  totalHeading: {
    fontSize: 21,
    fontFamily: 'barlow-regular',
  },
  price: {
    fontSize: 21,
    fontFamily: 'barlow-medium',
    fontWeight: '600',
  },
  checkoutBtn: {
    backgroundColor: COLORS.primaryColor,
    paddingVertical: 10,
    marginTop: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 21,
    fontFamily: 'barlow-regular',
  },
});

export default CartScreen;
