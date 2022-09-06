// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1pwCXn-mzTDL_QPnEKH3-0OO6Bsxe3Hk",
  authDomain: "e-commerce-react-js-coderhouse.firebaseapp.com",
  projectId: "e-commerce-react-js-coderhouse",
  storageBucket: "e-commerce-react-js-coderhouse.appspot.com",
  messagingSenderId: "865802851083",
  appId: "1:865802851083:web:7a70f99d039de6c70a880e",
  measurementId: "G-Z41BNRF706",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

export default db;
