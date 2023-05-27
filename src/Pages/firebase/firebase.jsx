// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA05bV6I7iJWgPEKNRkigSb9z1G3hMw8h4",
  authDomain: "calm-telemed.firebaseapp.com",
  databaseURL: "https://calm-telemed-default-rtdb.firebaseio.com",
  projectId: "calm-telemed",
  storageBucket: "calm-telemed.appspot.com",
  messagingSenderId: "908880621494",
  appId: "1:908880621494:web:1d0d2682e0272308d89b17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();