import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCcCPoaOVqXzL7fzdmUraHLwczdg-CDXzs",
  authDomain: "mediaapp-60d38.firebaseapp.com",
  projectId: "mediaapp-60d38",
  storageBucket: "mediaapp-60d38.appspot.com",
  messagingSenderId: "612884242691",
  appId: "1:612884242691:web:a554eac3f319d46caf8936",
  measurementId: "G-T2H5HCKPPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
