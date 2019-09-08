import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC9eKdTjxSBDz3Gzy8D-ODfhp4V-NBJf7o",
  authDomain: "marioplan-9cfe8.firebaseapp.com",
  databaseURL: "https://marioplan-9cfe8.firebaseio.com",
  projectId: "marioplan-9cfe8",
  storageBucket: "",
  messagingSenderId: "212289116130",
  appId: "1:212289116130:web:27f64a4da27f3310"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
