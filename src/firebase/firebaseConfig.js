import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDPrYdJ6_yEDlXUe4MyzfI1MFWlaaUPtMA",
  authDomain: "sktshop-db.firebaseapp.com",
  projectId: "sktshop-db",
  storageBucket: "sktshop-db.appspot.com",
  messagingSenderId: "824844711241",
  appId: "1:824844711241:web:50445bdbc14b81a36f5698"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)