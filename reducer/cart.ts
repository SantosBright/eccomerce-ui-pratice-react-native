export interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  quantity: number;
}

export interface CartActionType {
  type:
    | 'GET_PRODUCTS'
    | 'ADD_PRODUCT'
    | 'GET_PRODUCT'
    | 'ADD_PRODUCT_QUANTITY'
    | 'SUB_PRODUCT_QUANTITY'
    | 'SET_PRODUCTS'
    | 'CLEAR_PRODUCTS';
  payload: Product | number | Product[];
}

function cartReducer(state: Product[], action: CartActionType) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return state;
    case 'SET_PRODUCTS':
      return action.payload;
    case 'ADD_PRODUCT':
      let product = state.find(item => item.id === action.payload.id);
      if (!!product) {
        return state.map(item =>
          item.id === product?.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...(<Product>action.payload), quantity: 1 }];
      }
    case 'GET_PRODUCT':
      return state.find(item => item.id === action.payload.id);
    case 'SUB_PRODUCT_QUANTITY':
      let foundProduct = state.find(item => item.id === action.payload);
      if (foundProduct?.quantity === 1) {
        return state.filter(item => item.id !== action.payload);
      }
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case 'CLEAR_PRODUCTS':
      return [];
    default:
      return state;
  }
}

export default cartReducer;
