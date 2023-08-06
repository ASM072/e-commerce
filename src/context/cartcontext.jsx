import { createContext, useState } from "react";


const addCartItem = ( cartItems, productToAdd ) =>
{
    
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
    const value = { openCart, setOpenCart };
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    
}