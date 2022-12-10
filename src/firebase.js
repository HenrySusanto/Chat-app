import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDikb201TlTi3i4hY1RqWrrNrph1adQZ8g",
  authDomain: "chats-55c67.firebaseapp.com",
  projectId: "chats-55c67",
  storageBucket: "chats-55c67.appspot.com",
  messagingSenderId: "750352609310",
  appId: "1:750352609310:web:f55f7f7e6e753a05d3fe0f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
