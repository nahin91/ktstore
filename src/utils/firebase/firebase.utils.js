import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCafZLpn0hB1Z85viX-BtKJokfVM3czJF4",
  authDomain: "kt-store-db.firebaseapp.com",
  projectId: "kt-store-db",
  storageBucket: "kt-store-db.appspot.com",
  messagingSenderId: "521024175725",
  appId: "1:521024175725:web:251684651327d7883a4964",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// initalizing google authentication provider
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    propmt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try{
            await setDoc(userDocRef, {displayName, email, createdAt})
        }catch(error){
            console.log('error creating the user: ', error.message)
        }
    }

    return userDocRef

}