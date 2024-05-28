// import { createContext, useState, useEffect } from "react";
// // import ShopData from '../shopdata.js'
// import { getCategories } from "../utility/firebase/firebase.utility.js";


// export const ProductContext = createContext( {
//     categoryMap:[],
// } );



// export const  ProductsProvider = ( { children } ) =>
// {
//     const [ categoryMap, setProducts ] = useState( [] );
    
//     useEffect( () =>
//     {
//         const getCategoriesMap = async () =>
//         {
//             const categoriesMap = await getCategories();
//             setProducts( categoriesMap );
//         };
//         getCategoriesMap();
//     }, [] )
//     const value = { categoryMap };
//     return (
        
        
//         <ProductContext.Provider value={ value }>
            
//             {children}
//         </ProductContext.Provider>
//     )
// }