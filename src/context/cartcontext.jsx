import { createContext, useState, useEffect } from "react";


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
    const [ openCart, setOpenCart ] = useState( false );
    const [ cI, setCartItems ] = useState( [] );
    const [ cartCount, setCartCount ] = useState( 0 );
    const [ cartTotal, setCartTotal ] = useState( 0 );

    useEffect( () =>
    {
        const newCartCount = cI.reduce( ( total, cartItem ) => total + cartItem.quantity, 0 )
        setCartCount( newCartCount );
    }, [ cI ] );

    useEffect( () =>
    {
        const newCartTotal = cI.reduce(
            ( total, cartItem ) => total + cartItem.quantity * cartItem.price, 0 )
        setCartTotal( newCartTotal );
    }, [ cI ] );

    const addItemToCart = (productToAdd) =>
    {
        setCartItems( addCartItem( cI, productToAdd ) );
    }
    const removeCartItems = ( productToRemove ) =>
    {
        setCartItems( removeCartItem( cI, productToRemove ) );
    }
    const clearItemFromCart = ( cartItemToClear ) =>
    {
        setCartItems( clearCartItem( cI, cartItemToClear ) );
    }

    const value = { openCart, setOpenCart, addItemToCart, cI, cartCount, removeCartItems, clearItemFromCart, cartTotal };
    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    
}