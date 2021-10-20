import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import SingleProductScreen from './screens/SingleProductScreen';

export default function App() {
  let [fontsLoaded] = useFonts({
    barlow: require('./assets/fonts/Barlow-Light.ttf'),
    'barlow-bold': require('./assets/fonts/Barlow-Bold.ttf'),
    'barlow-semibold': require('./assets/fonts/Barlow-SemiBold.ttf'),
    'barlow-medium': require('./assets/fonts/Barlow-Medium.ttf'),
    'barlow-regular': require('./assets/fonts/Barlow-Regular.ttf'),
  });

  const { Screen, Navigator } = createNativeStackNavigator();

  return fontsLoaded ? (
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' component={HomeScreen} />
        <Screen name='Single' component={SingleProductScreen} />
      </Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}
