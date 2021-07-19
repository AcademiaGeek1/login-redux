import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAJqk5a-Hi0Aj0iOyrPASJk21IvxUNe6UU",
    authDomain: "login-redux-d8f9d.firebaseapp.com",
    projectId: "login-redux-d8f9d",
    storageBucket: "login-redux-d8f9d.appspot.com",
    messagingSenderId: "343986639687",
    appId: "1:343986639687:web:f10e681f33aef713ab3262"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const google = new firebase.auth.GoogleAuthProvider()

export {
    db,
    google,
    firebase
}