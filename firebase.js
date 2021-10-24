// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASR73Y4s66XThnQnP_yBvXqhKmXiPOGqs",
  authDomain: "insta-2-clone-51cc6.firebaseapp.com",
  projectId: "insta-2-clone-51cc6",
  storageBucket: "insta-2-clone-51cc6.appspot.com",
  messagingSenderId: "563185453347",
  appId: "1:563185453347:web:748043d53c07db48d62496",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { db, app, storage };
