// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdESTxoqHfC-S57pECWpfTNj-ODIPuvHg",
  authDomain: "invi-96e55.firebaseapp.com",
  projectId: "invi-96e55",
  storageBucket: "invi-96e55.appspot.com",
  messagingSenderId: "796177795085",
  appId: "1:796177795085:web:3950dd28c1433d5037ad44",
  measurementId: "G-01GT7KY0T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
