import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBQAvMk4hoWhPKuo72epbZfTgn6Zav1lKo",
  authDomain: "test-da0ee.firebaseapp.com",
  databaseURL: "https://test-da0ee.firebaseio.com",
  projectId: "test-da0ee",
  storageBucket: "",
  messagingSenderId: "324655100509"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const emailAuthProvider = new firebase.auth.EmailAuthProvider();
export { auth, database, googleAuthProvider, emailAuthProvider };
