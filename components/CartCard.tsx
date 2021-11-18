import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { Product } from '../reducer/cart';

interface Props {
  product: Product;
}

const CartCard = ({ product }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageCont}>
        <View style={styles.imageMain}>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={{ uri: product.image }}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{product.title}</Text>
        </View>
        <View style={styles.priceSize}>
          <Text style={styles.size}>x{product.quantity}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 50,
  },
  imageCont: {
    paddingHorizontal: 15,
    flex: 0.25,
    position: 'relative',
  },
  image: {
    width: 80,
    height: 90,
  },
  imageMain: {
    position: 'relative',
    elevation: 50,
    // backgroundColor: 'red',
    top: -15,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
  },
  infoContainer: {
    flex: 0.75,
  },
  title: {
    marginVertical: 20,
    fontFamily: 'barlow-regular',
    fontSize: 18,
  },
  priceSize: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  size: {
    fontSize: 16,
    color: '#868686',
    fontFamily: 'barlow',
  },
  price: {
    fontFamily: 'barlow-regular',
    fontSize: 16,
    color: '#B02B2B',
  },
});

export default CartCard;
