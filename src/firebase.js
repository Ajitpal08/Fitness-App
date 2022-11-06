// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDho30dRDreWtPWSFZJQRzjLIZH1x2BmSM",
  authDomain: "fitness-center-fd484.firebaseapp.com",
  projectId: "fitness-center-fd484",
  storageBucket: "fitness-center-fd484.appspot.com",
  messagingSenderId: "20214810226",
  appId: "1:20214810226:web:c8d11695db63a93604e4eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
