import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCrwjZJWXsJwjpNsDiCLiAPlkObpVbuwoc",
    authDomain: "thriftyapp-8314c.firebaseapp.com",
    projectId: "thriftyapp-8314c",
    storageBucket: "thriftyapp-8314c.appspot.com",
    messagingSenderId: "892962570948",
    appId: "1:892962570948:web:cf31aa3021459d113bff91",
    measurementId: "G-JWJ1EJQP3Z"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

