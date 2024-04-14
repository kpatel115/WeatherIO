// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlz55mKmdCBAmXMCFS1xig60gmpRrY1ds",
  authDomain: "weatherdb544.firebaseapp.com",
  projectId: "weatherdb544",
  storageBucket: "weatherdb544.appspot.com",
  messagingSenderId: "245663748304",
  appId: "1:245663748304:web:87339e748588761e848ed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const atuh = getAtuh(app)

export { app, auth };