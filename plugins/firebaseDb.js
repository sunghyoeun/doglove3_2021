import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBSi_w61Fk73Ao4vYI5jyh4VfqeLUkr1EQ",
    authDomain: "withcamp-8842b.firebaseapp.com",
    databaseURL: "https://withcamp-8842b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "withcamp-8842b",
    storageBucket: "withcamp-8842b.appspot.com",
    messagingSenderId: "336277527258",
    appId: "1:336277527258:web:eb88e4ec0da2cc6437a3e3",
    measurementId: "G-W4WTC9XLS5"
  };

  if (firebase.apps.length == 0) firebase.initializeApp(firebaseConfig);
  export default firebase.database();