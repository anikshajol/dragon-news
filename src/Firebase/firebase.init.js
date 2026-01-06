// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4XNnK-gkJwbvlBardwYkg29C0OJyYVvg",
  authDomain: "dragon-news-ebff7.firebaseapp.com",
  projectId: "dragon-news-ebff7",
  storageBucket: "dragon-news-ebff7.firebasestorage.app",
  messagingSenderId: "368330947082",
  appId: "1:368330947082:web:89e3c1f17b78c98371fdf3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
