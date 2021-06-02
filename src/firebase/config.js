import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyByhWaqguSVxlUDFFBzKneZ30aN9CmzsqM",
    authDomain: "firegram-net-ninja.firebaseapp.com",
    projectId: "firegram-net-ninja",
    storageBucket: "firegram-net-ninja.appspot.com",
    messagingSenderId: "337122777025",
    appId: "1:337122777025:web:bfd214ba1f9c356e7e8140"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };