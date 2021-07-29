import firebase from "firebase";  

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-uha21mHfjDgj-skM7cZf_D0sWW7I7r4",
    authDomain: "waffles-60684.firebaseapp.com",
    projectId: "waffles-60684",
    storageBucket: "waffles-60684.appspot.com",
    messagingSenderId: "177464302138",
    appId: "1:177464302138:web:9086fe45d8b916ada6b303",
    measurementId: "G-2YFY3LH00C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
