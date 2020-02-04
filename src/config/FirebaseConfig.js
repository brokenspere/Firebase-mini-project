import * as firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

 const firebaseConfig = {
    apiKey: "AIzaSyCrz0DTqidyt0n2y4FAf-PP0bUOwln44VA",
    authDomain: "mini-project-fdcdc.firebaseapp.com",
    databaseURL: "https://mini-project-fdcdc.firebaseio.com",
    projectId: "mini-project-fdcdc",
    storageBucket: "mini-project-fdcdc.appspot.com",
    messagingSenderId: "450642938086",
    appId: "1:450642938086:web:486d194e2d401edbbad327",
    measurementId: "G-E6R042SPHT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;