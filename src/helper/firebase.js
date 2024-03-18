// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLpwr5meahs8mUUt18SXfaLMl5wcY3JB0",
  authDomain: "amicolo.firebaseapp.com",
  projectId: "amicolo",
  storageBucket: "amicolo.appspot.com",
  messagingSenderId: "641769038602",
  appId: "1:641769038602:web:46056fb18afc1e7d0f50f3",
  measurementId: "G-RRV2Q4MSWR",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const facebook = new FacebookAuthProvider();
