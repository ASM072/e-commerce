import React, { useState, useEffect, useRef, useContext } from 'react';
import { getCategories } from '../../utility/firebase/firebase.utility';
import './searchbar.scss';
import ProductCard from '../productcard/productcard';
import { CartContext } from '../../context/cartcontext';
 

const SearchBar = () =>
{
    const [ filteredProducts, setFilteredProducts ] = useState( [] );
    const [ searchTerm, setSearchTerm ] = useState( '' );
    const [ showResults, setShowResults ] = useState( false );
    const resultsRef = useRef( null );

    const { openCart, setOpenCart } = useContext( CartContext );

    const handleSearch = async () =>
    {
        if ( searchTerm.trim() === '' )
        {
            setFilteredProducts( [] );
            return;
        }
        const categories = await getCategories( searchTerm );
        const matchingItems = Object.values( categories ).flat();
        setFilteredProducts( matchingItems );
        setShowResults( true );
    };

    const handleFocus = () =>
    {
        if ( filteredProducts.length > 0 )
        {
            setShowResults( true );
        }
    };

    const handleBlur = () =>
    {
        setTimeout( () =>
        {
            setShowResults( false );
        }, 200 );
    };

    const handleToggleResults = () =>
    {
        setShowResults( !showResults );
        setOpenCart( false ); 
    };

    useEffect( () =>
    {
        const handleClickOutside = event =>
        {
            if ( resultsRef.current && !resultsRef.current.contains( event.target ) )
            {
                setShowResults( false );
            }
        };
        document.addEventListener( 'mousedown', handleClickOutside );
        return () =>
        {
            document.removeEventListener( 'mousedown', handleClickOutside );
        };
    }, [] );



    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for products..."
                value={ searchTerm }
                onChange={ e => setSearchTerm( e.target.value ) }
                onFocus={ handleFocus }
                onBlur={ handleBlur }
            />
            <button onClick={ handleSearch }>Search</button>
           
            { showResults && (
                <div className="product-list" ref={ resultsRef }>
                    { filteredProducts.map( product => (
                        <ProductCard key={ product.id } product={ product } />
                    ) ) }
                </div>
            ) }
        </div>
    );
};



    
    //     return (
    //         <div>
    //             <div className="search-bar">
    //                 <input
    //                     type="text"
    //                     placeholder="Search products..."
    //                     value={ searchTerm }
    //                     onChange={ e => setSearchTerm( e.target.value ) }
    //                         onFocus = { handleFocus }
    //                         onBlur={handleBlur}
    //                 />
    //                 <button onClick={ handleSearch }>Search</button>
                    
    //                 <div className="product-list">
    //                     { filteredProducts.map( product => (
    //                         <ProductCard key={ product.id } product={ product } />
    //                     ) ) }
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
export default SearchBar;