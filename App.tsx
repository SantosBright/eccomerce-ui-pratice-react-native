import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useReducer } from 'react';
import {
  AsyncStorageStatic,
  TouchableNativeFeedback,
  Image,
  AsyncStorage,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import SingleProductScreen from './screens/SingleProductScreen';
import CartScreen from './screens/CartScreen';
import CartProvider from './context/cartContext';
import cartReducer from './reducer/cart';
import { ACTIONS, COLORS, SCREEN_NAMES } from './constants';

export default function App() {
  let [fontsLoaded] = useFonts({
    barlow: require('./assets/fonts/Barlow-Light.ttf'),
    'barlow-bold': require('./assets/fonts/Barlow-Bold.ttf'),
    'barlow-semibold': require('./assets/fonts/Barlow-SemiBold.ttf'),
    'barlow-medium': require('./assets/fonts/Barlow-Medium.ttf'),
    'barlow-regular': require('./assets/fonts/Barlow-Regular.ttf'),
  });
  const { Screen, Navigator } = createNativeStackNavigator();
  const [cartProducts, cartDispatch] = useReducer(cartReducer, []);

  const getCartLocal = async () => {
    cartDispatch({
      type: ACTIONS.SET_PRODUCTS,
      payload: JSON.parse(await AsyncStorage.getItem('cart-products')),
    });
  };

  const setCartLocal = async () => {
    await AsyncStorage.setItem('cart-products', JSON.stringify(cartProducts));
  };

  useEffect(() => {
    getCartLocal();
  }, []);

  useEffect(() => {
    setCartLocal();
  }, [cartProducts]);

  return fontsLoaded ? (
    <CartProvider disptachToCart={cartDispatch} cartProducts={cartProducts}>
      <NavigationContainer>
        <Navigator>
          <Screen
            name={SCREEN_NAMES.home}
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Screen
            name={SCREEN_NAMES.single}
            options={({ navigation }) => ({
              headerStyle: {
                backgroundColor: COLORS.defaultBackground,
                elevation: 0,
                position: '',
                shadowOpacity: 0,
              },
              headerShadowVisible: false,
              headerTitle: '',
              headerRight: () => (
                <TouchableNativeFeedback
                  onPress={() => navigation.navigate(SCREEN_NAMES.cart)}
                >
                  <Image source={require('./assets/cart.png')} />
                </TouchableNativeFeedback>
              ),
            })}
            component={SingleProductScreen}
          />
          <Screen
            name={SCREEN_NAMES.cart}
            options={({ navigation }) => ({
              headerShadowVisible: false,
              headerStyle: { backgroundColor: COLORS.defaultBackground },
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
    </CartProvider>
  ) : (
    <AppLoading />
  );
}
