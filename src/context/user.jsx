// import { createContext, useEffect, useReducer } from "react";
// import { onAuthStateChangedFunc, userDocFromAuth } from "../utility/firebase/firebase.utility";
// import { createAction } from "../utility/reducer/reducer.util";
// // import { type } from "@testing-library/user-event/dist/type";

// export const UserContext = createContext( {
//     currentUser: null,
//     setCurrentUser: () => null,
// } );

// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// }

// const userReducer = ( state, action ) => {

//     const { type, payload } = action;

//     switch ( type )
//     {
//         case 'SET_CURRENT_USER':
//             return {
//                 ...state,
//                 currentUser: payload
//             }
//         default:
//             throw new Error(`unhandled type ${type} in userReducer`)
//     }
// }

// const INITIAL_STATE = {
//     currentUser: null
// }

// export const UserProvider = ( { children } ) =>
// {
//     const [ { currentUser }, dispatch ] = useReducer( userReducer, INITIAL_STATE );
//     const setCurrentUser = ( user ) =>
//     {
//         dispatch( createAction( USER_ACTION_TYPES.SET_CURRENT_USER, user ));
//     }
//     const value = { currentUser, setCurrentUser };
//     useEffect( () =>
//     {
//         const unsubscribe = onAuthStateChangedFunc( ( user ) =>
//         {
//             if ( user )
//             {
//                 userDocFromAuth( user );
//             }
//             setCurrentUser( user );
//         } );

//         return unsubscribe;
//     }, [] );

//     return <UserContext.Provider value={ value }>{ children }</UserContext.Provider>;
// };

// export default UserContext;