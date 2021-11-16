import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import SingleProductScreen from './screens/SingleProductScreen';
import CartScreen from './screens/CartScreen';

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
        <Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name='Single'
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#F2F2F2',
              elevation: 0,
              position: '',
              shadowOpacity: 0,
            },
            headerShadowVisible: false,
            headerTitle: '',
            headerRight: () => (
              <TouchableNativeFeedback
                onPress={() => navigation.navigate('Cart')}
              >
                <Image source={require('./assets/cart.png')} />
              </TouchableNativeFeedback>
            ),
          })}
          component={SingleProductScreen}
        />
        <Screen
          name='Cart'
          options={({ navigation }) => ({
            headerShadowVisible: false,
            headerStyle: { backgroundColor: '#F2F2F2' },
            headerTitle: '',
            headerBackTitle: '',

            headerRight: () => (
              <TouchableNativeFeedback onPress={() => navigation.goBack()}>
                <Image source={require('./assets/cancel.png')} />
              </TouchableNativeFeedback>
            ),
          })}
          component={CartScreen}
        />
      </Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}
