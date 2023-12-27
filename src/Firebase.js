import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
