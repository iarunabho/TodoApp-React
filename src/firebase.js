import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    `Add your own apis from firebase`
);

const db = firebaseApp.firestore();

export default db   ;
  