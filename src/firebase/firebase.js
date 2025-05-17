import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmDuag3ZbWXLgPX5eGI6Hd1PnoPVG-diU",
  authDomain: "hotel-booking-482a4.firebaseapp.com",
  projectId: "hotel-booking-482a4",
  storageBucket: "hotel-booking-482a4.firebasestorage.app",
  messagingSenderId: "320056032234",
  appId: "1:320056032234:web:efa67c8c2dc884805f1093",
  measurementId: "G-L5NF5JY0P0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
