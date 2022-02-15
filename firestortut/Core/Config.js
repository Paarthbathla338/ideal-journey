import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbZR-n3d9xYFHAm2EZU0dpJ4stwI3FH9o",
    authDomain: "crudapptrial.firebaseapp.com",
    projectId: "crudapptrial",
    storageBucket: "crudapptrial.appspot.com",
    messagingSenderId: "463453347271",
    appId: "1:463453347271:web:b65b0e6c17a498d0938de2",
    measurementId: "G-DJQFZJY8R7"
  //...
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)