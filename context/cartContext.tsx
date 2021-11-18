import React, { createContext, Dispatch, ReactNode } from 'react';
import {} from 'react-native';
import { CartActionType, Product } from '../reducer/cart';

interface CartProviderProps {
  children: ReactNode;
  disptachToCart: Dispatch<CartActionType>;
  cartProducts: Product[];
}

export const cartContext =
  createContext<Omit<CartProviderProps, 'children'>>(null);

const CartProvider = ({
  children,
  disptachToCart,
  cartProducts,
}: CartProviderProps) => {
  return (
    <cartContext.Provider value={{ disptachToCart, cartProducts }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
