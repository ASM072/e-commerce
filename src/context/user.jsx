import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedFunc, userDocFromAuth } from "../utility/firebase/firebase.utility";

export const UserContext = createContext( {
    currentUser: null,
    setCurrentUser: () => null,
} );



export const UserProvider = ( { children } ) =>
{
    const [ currentUser, setCurrentUser ] = useState( null );
    const value = { currentUser, setCurrentUser };

    useEffect( () =>
    {
        const unsubscribe = onAuthStateChangedFunc( ( user ) =>
        {
            if ( user )
            {
                userDocFromAuth( user );
            }
            setCurrentUser( user );
        } );

        return unsubscribe;
    }, [] );

    return <UserContext.Provider value={ value }>{ children }</UserContext.Provider>;
};

export default UserContext;