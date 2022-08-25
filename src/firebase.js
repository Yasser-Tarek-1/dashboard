import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyrM0ES63aA0aLq_hHadAcKW81p_8vErA", //process.env.REACT_APP_FIREBASE_KEY
  authDomain: "dashboard-ef0eb.firebaseapp.com",
  projectId: "dashboard-ef0eb",
  storageBucket: "dashboard-ef0eb.appspot.com",
  messagingSenderId: "93560291251",
  appId: "1:93560291251:web:634f8fe921fed6c57955c6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
