import firebase from "firebase";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDm4zXgI3_cB6LYorOfibjAojMe6naUPTI",
    authDomain: "olxx-dd09f.firebaseapp.com",
    projectId: "olxx-dd09f",
    storageBucket: "olxx-dd09f.appspot.com",
    messagingSenderId: "733325993387",
    appId: "1:733325993387:web:cd8cae01d1b8a66fd15eee",
    measurementId: "G-VK6GBVZZH8"
  };
  const server = firebase.initializeApp(firebaseConfig);
  const auth = server.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}