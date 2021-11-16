import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableNativeFeedbackBase,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

interface Props {}

const SingleProductScreen = (props: Props) => {
  // const route = useRoute();
  // const { itemId } = route.params;

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#F2F2F2' }}>
        <View>
          <Image
            resizeMode='contain'
            source={require('../assets/images/detail.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity style={styles.likeBtn}>
            <Image source={require('../assets/like.png')} />
          </TouchableOpacity>
          <Text style={styles.price}>$55.25</Text>
          <Text style={styles.title}>
            Nike F.C. Women's Tie-Dye Football Shirt
          </Text>
          <Text style={styles.description}>
            The Nike F.C. Shirt blends 2 summer favourites: festivals and
            football. Soft, sweat-wicking fabric and a mesh racerback help you
            stay comfortable on the pitch or in the crowd.
          </Text>
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
