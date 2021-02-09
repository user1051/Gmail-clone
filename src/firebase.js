import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAZI4-iYv2u8zwTWueka_79azgEZWPzCqk",
  authDomain: "clone-a93be.firebaseapp.com",
  projectId: "clone-a93be",
  storageBucket: "clone-a93be.appspot.com",
  messagingSenderId: "89398693973",
  appId: "1:89398693973:web:571bf4d290db49802dc4dc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // connecting frontend to backend
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };