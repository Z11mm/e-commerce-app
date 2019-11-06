/* eslint-disable no-useless-return */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyADa7FEaG4TAr3GqxOW9Hs-4msYFxqlJAM',
  authDomain: 'crwn-db-eb333.firebaseapp.com',
  databaseURL: 'https://crwn-db-eb333.firebaseio.com',
  projectId: 'crwn-db-eb333',
  storageBucket: 'crwn-db-eb333.appspot.com',
  messagingSenderId: '3520233633',
  appId: '1:3520233633:web:d0408b1a8703f85c1bf0e0',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
