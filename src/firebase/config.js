import { initializeApp, default as firebase } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-7kY9Nu_GZR8VhHZ-7zLe8b6DaR4Uhpo",
  authDomain: "first-vue-js-firebase-project.firebaseapp.com",
  projectId: "first-vue-js-firebase-project",
  storageBucket: "first-vue-js-firebase-project.firebasestorage.app",
  messagingSenderId: "813237073249",
  appId: "1:813237073249:web:cb05ee061a7b161b278120",
};

//initialize firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
