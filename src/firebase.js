import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqOiBTaqifP71VqBbgUPy4g47PTFQyv34",
    authDomain: "facebook-react-clone.firebaseapp.com",
    databaseURL: "https://facebook-react-clone.firebaseio.com",
    projectId: "facebook-react-clone",
    storageBucket: "facebook-react-clone.appspot.com",
    messagingSenderId: "243007179720",
    appId: "1:243007179720:web:fb8532c6fdc7cd2293cefd",
    measurementId: "G-207X4EN9DR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;
