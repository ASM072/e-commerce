import { createContext, useState } from "react";


const addCartItem = ( cartItems, productToAdd ) =>
{
    const existingCartItem = cartItems.find( ( cartItems ) => cartItems === productToAdd.id );
    if ( existingCartItem )
    {
        return cartItems.map( ( cartItems ) => cartItems.id === productToAdd.id ? { ...cartItems, quantity: cartItems.quantity + 1 } : cartItems );
    }
    return [ ...cartItems, { ...productToAdd, quantity: 1 } ];
}
export const CartContext = createContext( {
    openCart: false,
    setOpenCart: () => { }, 
    cartItems: [],
    addItemToCart: () => { },
} )

export const CartProvider = ( { children } ) =>
{
    const [ openCart, setOpenCart ] = useState( false );
    const [ cartItems, setCartItems ] = useState( [] );
    const addItemToCart = (productToAdd) =>
    {
        setCartItems( addCartItem( cartItems, productToAdd ) );
    }
    const value = { openCart, setOpenCart, addItemToCart, cartItems };
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    
}