import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAO8hJJ_vkFIfKGrseX4L9pIhdjhnL8WBw',
  authDomain: 'e-commerce-react-db-32133.firebaseapp.com',
  databaseURL: 'https://e-commerce-react-db-32133.firebaseio.com',
  projectId: 'e-commerce-react-db-32133',
  storageBucket: 'e-commerce-react-db-32133.appspot.com',
  messagingSenderId: '945234445281',
  appId: '1:945234445281:web:6fcb8d02cbb29269d688a0',
  measurementId: 'G-CEH9GNB5MY'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
