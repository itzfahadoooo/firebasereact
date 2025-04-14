import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1-yyNM80f7Kk6nOZjn9syMcT4XJsjoYw",
  authDomain: "fir-react-8d8d8.firebaseapp.com",
  projectId: "fir-react-8d8d8",
  storageBucket: "fir-react-8d8d8.firebasestorage.app",
  messagingSenderId: "825504683872",
  appId: "1:825504683872:web:0aa76adf83c722d2ccb005",
  measurementId: "G-HKFBQL6C0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);

export {app,analytics,auth};

