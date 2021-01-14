import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCCaAQ15pY4aJqmy5FhPfZRah4XKbA7ppE',
  authDomain: 'wellnessblog-b81d5.firebaseapp.com',
  projectId: 'wellnessblog-b81d5',
  storageBucket: 'wellnessblog-b81d5.appspot.com',
  messagingSenderId: '1089166304822',
  appId: '1:1089166304822:web:52d7bbf6554ec28b3ada97',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

firebase.firestore();

export default firebase;
