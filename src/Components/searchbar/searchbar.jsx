import React, { useState } from 'react';
import './searchbar.scss';
 

const SearchBar = ( { onSearch } ) =>
{
    const [ searchQuery, setSearchQuery ] = useState( '' );
    

    const handleInputChange = ( event ) =>
    {
        setSearchQuery( event.target.value );
        onSearch( event.target.value );
    };


        return (
            <div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={ searchQuery }
                        onChange={ handleInputChange }
                    />
                </div>
            </div>
        );
    }
export default SearchBar;