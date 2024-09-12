// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGIiH7Dj0IU41nD_yjlXBBt8_4PSAf-u0",
  authDomain: "travel-guide-system-94996.firebaseapp.com",
  projectId: "travel-guide-system-94996",
  storageBucket: "travel-guide-system-94996.appspot.com",
  messagingSenderId: "310982764705",
  appId: "1:310982764705:web:edd74fb4a8529dbb3768e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
