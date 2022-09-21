import {initializeApp } from 'firebase/app';
import {
        getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider
    } from 'firebase/auth';


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

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () =>signInWithGooglePopup(auth,provider);
