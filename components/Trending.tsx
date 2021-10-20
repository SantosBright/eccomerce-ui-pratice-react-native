import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import TrendingItem from './TrendingItem';
import { trendingData } from '../data';

const Trending = ({navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending</Text>
      <FlatList
        data={trendingData}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 15,
        }}
        keyExtractor={item => new Date().toString() + item.heading}
        renderItem={({ item }) => <TrendingItem navigation={navigation } item={item} />}
      />
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 25,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'barlow-regular',
  },
});
