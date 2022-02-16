import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJnqGRtoFjV3zFUJ5OaOGXoPnyYzDkb5k",
    authDomain: "creatingpostsapp.firebaseapp.com",
    projectId: "creatingpostsapp",
    storageBucket: "creatingpostsapp.appspot.com",
    messagingSenderId: "761721492853",
    appId: "1:761721492853:web:31d04c4854819fd1ef6f3c",
    measurementId: "G-JMBX9B45YT"  //...
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)