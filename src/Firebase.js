// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANBm7V-oPfhIdIMLWCn4Y_axz_qJCU1Nc",
  authDomain: "event-invitation-project.firebaseapp.com",
  projectId: "event-invitation-project",
  storageBucket: "event-invitation-project.appspot.com",
  messagingSenderId: "1042078432457",
  appId: "1:1042078432457:web:6db27212b7a0f597932118",
  measurementId: "G-4YH7Y3L81B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
