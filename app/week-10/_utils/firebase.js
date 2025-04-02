// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfHOtCLsl0QesbaF-ubGKMsUuLO6KYqUU",
  authDomain: "cprg306-assignments-c1acf.firebaseapp.com",
  projectId: "cprg306-assignments-c1acf",
  storageBucket: "cprg306-assignments-c1acf.firebasestorage.app",
  messagingSenderId: "238576379705",
  appId: "1:238576379705:web:58234a09cf23cffb3d2ae8"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);