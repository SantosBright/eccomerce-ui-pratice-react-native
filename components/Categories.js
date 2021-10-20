import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <ScrollView horizontal style={styles.scrollContainer}>
        <View style={styles.containerImage}>
          <Image
            source={require('../assets/images/category-1.png')}
            style={{ height: 270, width: Dimensions.get('window').width - 25 }}
          />
          <View style={styles.infoContainer}>
            <View style={styles.infoInner}>
              <View style={styles.infoText}>
                <Text style={styles.infoHeading}>Women’s</Text>
                <Text style={styles.infoCaption}>Kits & jerseys</Text>
              </View>
              <View>
                <Image
                  source={require('../assets/arrow.png')}
                  style={{ height: 7, width: 40 }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerImage}>
          <Image
            source={require('../assets/images/category-2.png')}
            style={{ height: 270 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: '300',
    padding: 10,
    paddingHorizontal: 25,
    marginVertical: 20,
    fontFamily: 'barlow-regular',
  },
  scrollContainer: {
    paddingHorizontal: 25,
  },
  containerImage: {
    position: 'relative',
    marginRight: 25,
  },
  infoContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    right: 0,
    bottom: 40,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  infoText: {
    marginRight: 30,
  },
  infoHeading: {
    fontSize: 21,
    fontWeight: '600',
    fontFamily: 'barlow-medium',
  },
  infoCaption: {
    fontSize: 14,
    lineHeight: 17,
    color: '#868686',
    fontFamily: 'barlow',
  },
  infoInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
