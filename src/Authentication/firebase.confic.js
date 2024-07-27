import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// console.log('this is env variables',import.meta.env.VITE_apiKey)
const firebaseConfig = {
  apiKey: "AIzaSyBHEN4uEgr29uSP9rxO88cozLYgFN48kXQ",
  authDomain: "car-projects-92ecb.firebaseapp.com",
  projectId: "car-projects-92ecb",
  storageBucket: "car-projects-92ecb.appspot.com",
  messagingSenderId: "335568478181",
  appId: "1:335568478181:web:68dbac6819f7342f1e990c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
