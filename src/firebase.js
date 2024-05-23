// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyActAfYYu3ZGoSu83VOVh8J_AdL74nyb_I",
  authDomain: "resume-9ecbb.firebaseapp.com",
  projectId: "resume-9ecbb",
  storageBucket: "resume-9ecbb.appspot.com",
  messagingSenderId: "208189638851",
  appId: "1:208189638851:web:6b99bf72e7620a9d8eba76",
  measurementId: "G-CF64RDKSW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);