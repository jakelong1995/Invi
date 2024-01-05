import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPeKGMiGAabyTNxdcXLLwshA4BvyGfixk",
  authDomain: "final-project-52295.firebaseapp.com",
  projectId: "final-project-52295",
  storageBucket: "final-project-52295.appspot.com",
  messagingSenderId: "760679924783",
  appId: "1:760679924783:web:131efb105ae81ee249f2da",
  measurementId: "G-EGHETX4KTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
