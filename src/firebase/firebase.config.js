// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdEn-x__sQr8k37tADvPuhHqD1o4m14es",
  authDomain: "products-resale-website.firebaseapp.com",
  projectId: "products-resale-website",
  storageBucket: "products-resale-website.appspot.com",
  messagingSenderId: "796428397285",
  appId: "1:796428397285:web:ce55d4aa8deb530f1f820c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;