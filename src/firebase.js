import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA8vPlkUtsbUH7evgClRmrlmdvwqZWuUG4",
    authDomain: "whats-app-clone-144ff.firebaseapp.com",
    databaseURL: "https://whats-app-clone-144ff.firebaseio.com",
    projectId: "whats-app-clone-144ff",
    storageBucket: "whats-app-clone-144ff.appspot.com",
    messagingSenderId: "1062326262890",
    appId: "1:1062326262890:web:e7333886591392622a3e13",
    measurementId: "G-QMD0NYVWQK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;