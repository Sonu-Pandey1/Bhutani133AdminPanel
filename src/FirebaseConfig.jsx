
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: "AIzaSyAUn6QQzWOCH4dOi0Q-VvFYomF18zl1UD8",
  authDomain: "bhutani-adminpanel.firebaseapp.com",
  projectId: "bhutani-adminpanel",
  storageBucket: "bhutani-adminpanel.appspot.com",
  messagingSenderId: "134556052787",
  appId: "1:134556052787:web:778ce630e7a5b422ad2246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);