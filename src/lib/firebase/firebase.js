// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqiG1sH0mwPjDVODyJebywVwNYt-L21pk",
  authDomain: "guy20questions.firebaseapp.com",
  projectId: "guy20questions",
  storageBucket: "guy20questions.firebasestorage.app",
  messagingSenderId: "693808415157",
  appId: "1:693808415157:web:5b3ab93dba9bc8f00f59fc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)

export { firebaseApp, auth }


