import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDoxpYX9KzGDyqzDjMyKjZn4ZzcQDqtNGQ",
    authDomain: "todo-app-cp-ff668.firebaseapp.com",
    databaseURL: "https://todo-app-cp-ff668.firebaseio.com",
    projectId: "todo-app-cp-ff668",
    storageBucket: "todo-app-cp-ff668.appspot.com",
    messagingSenderId: "216346952782",
    appId: "1:216346952782:web:545e3f6e36040a73a02f1f",
    measurementId: "G-4P7W7CHBEY"
});

const db = firebaseApp.firestore();

export default db   ;
  