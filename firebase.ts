import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAOBn-ITS7vCjduWhfWBrjMFmcTAZfh-E",
  authDomain: "chatgpt-clone-8602c.firebaseapp.com",
  projectId: "chatgpt-clone-8602c",
  storageBucket: "chatgpt-clone-8602c.appspot.com",
  messagingSenderId: "883796215784",
  appId: "1:883796215784:web:2f3b5ecb0124d813e0865d",
  measurementId: "G-2GDECTPPWT",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
