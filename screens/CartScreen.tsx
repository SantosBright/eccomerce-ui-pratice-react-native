import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CartCard from '../components/CartCard';
import { cartData } from '../data';

interface Props {}

const CartScreen = (props: Props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Cart</Text>
        <FlatList data={cartData} renderItem={() => <CartCard />} />
      </View>
      <View style={styles.totalContainer}>
        <View style={styles.totalHead}>
          <Text style={styles.totalHeading}>Total</Text>
          <Text style={styles.price}>$150</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.checkoutBtn}>
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
    backgroundColor: '#F2F2F2',
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
    backgroundColor: 'black',
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
