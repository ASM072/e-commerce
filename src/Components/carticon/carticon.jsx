import{ShoppingIcon, CartIconContainer, ItemCount} from './carticonstyle.jsx';
import React, { useContext } from "react";
import  { CartContext } from "../../context/cartcontext";



const CartIcon = () =>
{
    const { openCart, setOpenCart, cartCount } = useContext( CartContext );
  

    const toggleOpenCart = () =>
    {
        setOpenCart( !openCart );
         
    };

    return (
        <CartIconContainer onClick={ toggleOpenCart }>
            <ShoppingIcon className="shoppingIcon"></ShoppingIcon>
            <ItemCount className="itemCount">{ cartCount }</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;

// const CartIcon = () =>
// {
//     const { openCart, setOpenCart, cartCount } = useContext( CartContext );
//     const { showResults, setShowResults } = useContext( CartContext ); 

//     const toggleOpenCart = () =>
//     {
//         setOpenCart( !openCart );
//         setShowResults( false ); 
//     };

//     return (
//         <CartIconContainer onClick={ toggleOpenCart }>
//             <ShoppingIcon className="shoppingIcon"></ShoppingIcon>
//             <ItemCount className="itemCount">{ cartCount }</ItemCount>
//         </CartIconContainer>
//     );
// };

// export default CartIcon;