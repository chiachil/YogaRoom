import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd6Fqc4Qle8lkM9dJ_ZAZZHhEH_eK59Cs",
  authDomain: "yogaroom-24504.firebaseapp.com",
  databaseURL:
    "https://yogaroom-24504-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "yogaroom-24504",
  storageBucket: "yogaroom-24504.appspot.com",
  messagingSenderId: "238475426588",
  appId: "1:238475426588:web:61e0650fabd56c85d2d8d9",
  measurementId: "G-QDCMPY792B",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
