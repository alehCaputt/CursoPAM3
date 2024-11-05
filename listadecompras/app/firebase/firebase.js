// firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlbHFuXMIHAylQZgz67ergah4eag-YZUw",
  authDomain: "lista-de-compras-fc028.firebaseapp.com",
  projectId: "lista-de-compras-fc028",
  storageBucket: "lista-de-compras-fc028.appspot.com",
  messagingSenderId: "773660683221",
  appId: "1:773660683221:web:b778870e21ae40d012eb5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
