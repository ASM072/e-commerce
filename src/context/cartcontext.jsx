import { createContext, useState, useReducer } from "react";
import { createAction } from "../utility/reducer/reducer.util";


const addCartItem = ( cI, productToAdd ) =>
{
    const existingCI = cI.find( ( cartItem ) => cartItem.id === productToAdd.id );
    if ( existingCI )
    {
        return cI.map( ( cartItem ) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem );
    }
    return [ ...cI, { ...productToAdd, quantity: 1 } ];
};

const removeCartItem = ( cI, cartItemToRemove ) =>
{
    const existingCI = cI.find(
        ( cartItem ) => cartItem.id === cartItemToRemove.id );
    if ( existingCI.quantity === 1 )
    {
        return cI.filter( cartItem => cartItem.id !== cartItemToRemove.id );
    }
    return cI.map( ( cartItem ) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem );

} 

const clearCartItem = ( cI, cartItemToClear ) =>
    cI.filter( cartItem => cartItem.id !== cartItemToClear.id );

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL: 'SET_CART_TOTAL',
};

const INITIAL_STATE = {
  isCartOpen: false,
  cI: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartContext = createContext( {
    openCart: false,
    setOpenCart: () => { }, 
    cI: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart:()=>{},
    cartCount: 0,
    cartTotal: 0
} )

export const CartProvider = ( { children } ) =>
{
    const [openCart, setOpenCart] = useState(false);

  const [{ cartCount, cartTotal, cI }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (cI) => {
    const newCartCount = cI.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = cI.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cI,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };
    // const [ openCart, setOpenCart ] = useState( false );
    // const [ cI, setCartItems ] = useState( [] );
    // const [ cartCount, setCartCount ] = useState( 0 );
    // const [ cartTotal, setCartTotal ] = useState( 0 );

    // useEffect( () =>
    // {
    //     const newCartCount = cI.reduce( ( total, cartItem ) => total + cartItem.quantity, 0 )
    //     setCartCount( newCartCount );
    // }, [ cI ] );

    // useEffect( () =>
    // {
    //     const newCartTotal = cI.reduce(
    //         ( total, cartItem ) => total + cartItem.quantity * cartItem.price, 0 )
    //     setCartTotal( newCartTotal );
    // }, [ cI ] );

    const addItemToCart = (productToAdd) =>
    {
        const newCartItems = addCartItem( cI, productToAdd );
        updateCartItemsReducer( newCartItems );
    }
    const removeCartItems = ( productToRemove ) =>
    {
        const newCartItems = removeCartItem( cI, productToRemove );
        updateCartItemsReducer( newCartItems );
    }
    const clearItemFromCart = ( cartItemToClear ) =>
    {
        const newCartItems = clearCartItem( cI, cartItemToClear );
        updateCartItemsReducer( newCartItems );
    }

    const value = { openCart, setOpenCart, addItemToCart, cI, cartCount, removeCartItems, clearItemFromCart, cartTotal };
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    
}