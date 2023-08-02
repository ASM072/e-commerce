// eslint-disable-next-line

import { initializeApp } from 'firebase/app';
import{ getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

export const userDocFromAuth = async ( userAuth ) =>
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
            } );
        } catch ( error )
        {
            console.log( 'error creating the user', error.message );
        }
    }

    return userDocRef;
};


export const authUserWithEmailAndPassword = async ( email, password ) =>
{
    if ( !email || !password ) return;
    return await authUserWithEmailAndPassword( auth, email, password );
};
export const userSignIn = async ( email, password ) =>
{
    if ( !email || !password ) return;
    return await userSignIn( auth, email, password );
}
