import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkvnYmHECGptKlVZ4sE1opiunmHsFuuwA",
  authDomain: "mindfultasks-cc210.firebaseapp.com",
  projectId: "mindfultasks-cc210",
  storageBucket: "mindfultasks-cc210.appspot.com",
  messagingSenderId: "1042971075827",
  appId: "1:1042971075827:web:96fa572006a07a0eec4386",
  measurementId: "G-D22Z292V98",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timestamp };
