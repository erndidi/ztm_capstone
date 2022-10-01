import {initializeApp } from 'firebase/app';
import {getDatabase, ref, set} from "firebase/database";
//import { getFirestore, collection,doc, getDocs, setDoc } from 'firebase/firestore';

import {
        getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider
    } from 'firebase/auth';

    import{
      getFirestore,
      doc,
      getDoc,
      setDoc
    } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8FRK9lJ8WFJa5MnCraDBTiJWN3TJCKmg",
    authDomain: "ztm-react-project.firebaseapp.com",
    projectId: "ztm-react-project",
    storageBucket: "ztm-react-project.appspot.com",
    messagingSenderId: "737539305609",
    appId: "1:737539305609:web:d7a6bd52d7af973f475658"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
  export const createUserDocumentFromAuth = async (userAuth) => {
   const userDocRef = doc(db, 'users', userAuth.uid);  
    /*set(userDocRef, {
      username: userAuth.name,
      email: userAuth.email,
      profile_picture: userAuth.imageUrl
    });
      */
     console.log(userDocRef);
     const userSnapShot = await getDoc(userDocRef);
     console.log(userSnapShot);
     console.log(userSnapShot.exists());

     if(!userSnapShot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch(error){
        console.log('error creating the user '+error)
      }
     }
     
   };
 
 

 
  

  
  