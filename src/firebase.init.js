// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeXGFq9UIxS9BRWSUW0eRgsDIto5fCwI0",
  authDomain: "genius-car-service-2221a.firebaseapp.com",
  projectId: "genius-car-service-2221a",
  storageBucket: "genius-car-service-2221a.appspot.com",
  messagingSenderId: "4038191928",
  appId: "1:4038191928:web:fcd6f169c558f6b478afcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
