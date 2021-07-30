import firebase from "firebase";  

//SID:
// const firebaseConfig = {
//     apiKey: "AIzaSyC-uha21mHfjDgj-skM7cZf_D0sWW7I7r4",
//     authDomain: "waffles-60684.firebaseapp.com",
//     projectId: "waffles-60684",
//     storageBucket: "waffles-60684.appspot.com",
//     messagingSenderId: "177464302138",
//     appId: "1:177464302138:web:9086fe45d8b916ada6b303",
//     measurementId: "G-2YFY3LH00C"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyAimlr8hRA32Lj5FdVUb3U_dBdZgOUBykA",
  authDomain: "whats-app-clone-bb47a.firebaseapp.com",
  projectId: "whats-app-clone-bb47a",
  storageBucket: "whats-app-clone-bb47a.appspot.com",
  messagingSenderId: "619436150134",
  appId: "1:619436150134:web:17ced0f9b3d0c24da93e57",
  measurementId: "G-9GR28F4NRE"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
