// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firstore'
const firebaseConfig = {
  apiKey: "AIzaSyCsTgnnvKeYAl-nACCKTZ_J1lQmcZd9110",
  authDomain: "dorm-782ac.firebaseapp.com",
  projectId: "dorm-782ac",
  storageBucket: "dorm-782ac.appspot.com",
  messagingSenderId: "370377929834",
  appId: "1:370377929834:web:70ae54a530cb69d0098613"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const db=getFirestore(app)