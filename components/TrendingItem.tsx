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

interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

interface TrendingItemProps {
  item: Product;
}

const TrendingItem = ({ item }: TrendingItemProps) => {
  const navigation = useNavigation();

  const truncateStr = (str: string): string => {
    if (str.length > 20) {
      str = str.substring(0, 17) + '...';
    }
    return str;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Single', { itemId: item.id })}
      >
        <Image
          resizeMode='contain'
          style={styles.image}
          source={{ uri: item.image }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{truncateStr(item.title)}</Text>
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
