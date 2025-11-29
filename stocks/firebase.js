import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTMMi9MvaOopDdbRrcREexAQ244FiIP4o",
  authDomain: "stock-38cee.firebaseapp.com",
  projectId: "stock-38cee",
  storageBucket: "stock-38cee.firebasestorage.app",
  messagingSenderId: "211578094488",
  appId: "1:211578094488:web:9a7bd69185dacfaf1c61ed",
  measurementId: "G-1W8D88W55D"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);