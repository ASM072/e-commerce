// eslint-disable-next-line

import { initializeApp } from 'firebase/app';
import{ 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0VdbGHlxjHXBALe1imkrFl40e8SzkGiM",
    authDomain: "ontime-072.firebaseapp.com",
    projectId: "ontime-072",
    storageBucket: "ontime-072.appspot.com",
    messagingSenderId: "774650616050",
    appId: "1:774650616050:web:d6278b57e823b8450c986b"
};

const firebaseApp = initializeApp( firebaseConfig );

const provider = new GoogleAuthProvider();

provider.setCustomParameters( {
    prompt: 'select_account',
} );

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup( auth, provider );

export const db = getFirestore();

export const addCollection = async ( collectionKey, objects ) =>
{
    const collectionReference = collection( db, collectionKey );
    const batch = writeBatch( db );
    objects.forEach((element) => {
        const docRef = doc( collectionReference, element.title.toLowerCase() );
        batch.set( docRef, element );
    } );
    await batch.commit();
}

export const getCategories = async ( searchTerm = '' ) =>
{
    const collectionReference = collection( db, 'categories' );
    const q = query( collectionReference );

    const querySnapShot = await getDocs( q );
    const categoriesMap = querySnapShot.docs.reduce( ( accumulator, docSnapshot ) =>
    {
        const { title, items } = docSnapshot.data();

        let filteredItems = items;
        if ( searchTerm )
        {
            filteredItems = items.filter( item =>
                item.name.toLowerCase().includes( searchTerm.toLowerCase() )
            );
        }

        accumulator[ title.toLowerCase() ] = items;
        return accumulator;
    }, {} );
    return categoriesMap;
}

export const userDocFromAuth = async ( userAuth, additionalInformation={} ) =>
{
    if ( !userAuth ) return;
    const userDocRef = doc( db, 'users', userAuth.uid );

    const userSnapshot = await getDoc( userDocRef );

    if ( !userSnapshot.exists() )
    {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try
        {
            await setDoc( userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            } );
        } catch ( error )
        {
            console.log( 'error creating the user', error.message );
        }
    }

    return userDocRef;
};



export const createAuthUserWithEmailAndPassword = async ( email, password ) =>
{
    if ( !email || !password ) return;

    return await createUserWithEmailAndPassword( auth, email, password );
};
export const userSignIn = async ( email, password ) =>
{
    if ( !email || !password ) return;
    return await signInWithEmailAndPassword( auth, email, password );
}

export const userSignOut = async () => await signOut( auth );

export const onAuthStateChangedFunc=(callback)=>onAuthStateChanged(auth, callback)