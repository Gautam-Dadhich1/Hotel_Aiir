import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa4W4dP6Hkul2Xw2XiEjTCB4wwNJNjXjc",
  authDomain: "hotel-ead30.firebaseapp.com",
  projectId: "hotel-ead30",
  storageBucket: "hotel-ead30.appspot.com",
  messagingSenderId: "357216989822",
  appId: "1:357216989822:web:9a66e9c0e167de113c5e2f",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInwithGoogle = () => {
  return signInWithPopup(auth, provider);
};
