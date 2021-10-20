import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

type Props = {
  item: {
    imageUrl: string;
    heading: string;
    price: number;
    id: number;
  };
};

const TrendingItem = ({ item }: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Single', { itemId: item.id })}
      >
        <Image
          style={styles.image}
          source={require('../assets/images/product-2.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{item.heading}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
};

export default TrendingItem;

const width = Dimensions.get('window').width - 50;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
  },
  image: {
    height: 170,
    aspectRatio: 1,
  },
  title: {
    fontSize: 14,
    marginBottom: 4,
    marginTop: 10,
    fontWeight: '400',
    fontFamily: 'barlow',
  },
  price: {
    color: '#B02B2B',
    fontSize: 14,
    fontFamily: 'barlow',
  },
});
