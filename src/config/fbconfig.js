import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBOke9HoIcTWj4Qi5zkk1VXv-MfgfpcWWU",
  authDomain: "d-note-833c3.firebaseapp.com",
  projectId: "d-note-833c3",
  storageBucket: "d-note-833c3.appspot.com",
  messagingSenderId: "558970079042",
  appId: "1:558970079042:web:7fed151c3cd0230957aadb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;