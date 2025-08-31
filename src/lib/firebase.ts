// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtQj1DbvOemFL0l5QvuEGCHt-MxLOhgbw",
  authDomain: "ceylon-bonsai-museum-landing.firebaseapp.com",
  projectId: "ceylon-bonsai-museum-landing",
  storageBucket: "ceylon-bonsai-museum-landing.firebasestorage.app",
  messagingSenderId: "880933100478",
  appId: "1:880933100478:web:b4661af84aed343349f7ef"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
