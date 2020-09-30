import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3GLw1InR5pPVMNUho-L_njieBJ0DD8qw",
    authDomain: "e-clone-af186.firebaseapp.com",
    databaseURL: "https://e-clone-af186.firebaseio.com",
    projectId: "e-clone-af186",
    storageBucket: "e-clone-af186.appspot.com",
    messagingSenderId: "475824970495",
    appId: "1:475824970495:web:0d99f3a6865986e05acaca",
    measurementId: "G-36NLEBTX0X"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };