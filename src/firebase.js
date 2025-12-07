import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPfl0Xll7qjL8FLVGqXRGMCcttJXemQkE",
  authDomain: "portfolio-66015.firebaseapp.com",
  projectId: "portfolio-66015",
  storageBucket: "portfolio-66015.firebasestorage.app",
  messagingSenderId: "910714045260",
  appId: "1:910714045260:web:b697e6d7be5abe735ac5e9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
