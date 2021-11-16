import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Categories from '../components/Categories';
import Trending from '../components/Trending';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Categories />
      <Trending navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
