import { initializeApp } from "firebase/app";
import {
  getAuth,
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDBw6lyKDYxLdvvBqO2b33J2Tl5i1AId54",
    authDomain: "fir-c7070.firebaseapp.com",
    projectId: "fir-c7070",
    storageBucket: "fir-c7070.appspot.com",
    messagingSenderId: "41229070582",
    appId: "1:41229070582:web:def4394e89129920797cd7",
    measurementId: "G-FRX8B42L04"
  };

// Initialize Firebase
const fbAuthProvider = new FacebookAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
export const FacebookAuth = async () => {
  const fbAuth = signInWithPopup(auth, fbAuthProvider);
  console.log("fbAuth==>",fbAuth);
  return fbAuth;
};