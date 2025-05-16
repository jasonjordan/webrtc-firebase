// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVGQi8Shm9nxyDKupuQCYMPT6PpRlSlBU",
  authDomain: "tripchat2.firebaseapp.com",
  databaseURL: "https://tripchat2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tripchat2",
  storageBucket: "tripchat2.firebasestorage.app",
  messagingSenderId: "565535776882",
  appId: "1:565535776882:web:e4914cee470759d95e22eb",
  measurementId: "G-JZ8HJR4DS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
