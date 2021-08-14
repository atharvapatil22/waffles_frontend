import firebase from "firebase";   

//SID:
const firebaseConfig = {
    apiKey: "AIzaSyC-uha21mHfjDgj-skM7cZf_D0sWW7I7r4",
    authDomain: "waffles-60684.firebaseapp.com",
    projectId: "waffles-60684",
    storageBucket: "waffles-60684.appspot.com",
    messagingSenderId: "177464302138",
    appId: "1:177464302138:web:9086fe45d8b916ada6b303",
    measurementId: "G-2YFY3LH00C"
  };

// NEW DB
// const firebaseConfig = {
//   apiKey: "AIzaSyDm4sltYmNUF-JXxC0OpBXVbSbdY-GHIAg",
//   authDomain: "react-chatapp-8e8cf.firebaseapp.com",
//   projectId: "react-chatapp-8e8cf",
//   storageBucket: "react-chatapp-8e8cf.appspot.com",
//   messagingSenderId: "130131394363",
//   appId: "1:130131394363:web:e38598f65cd67bdd99411e",
//   measurementId: "G-SG3S5PYLNZ"
// };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
