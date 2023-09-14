import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuaDIrTtabTkNoahAYI6TeTeavHjyw10E",
  authDomain: "dev-blog-316aa.firebaseapp.com",
  projectId: "dev-blog-316aa",
  storageBucket: "dev-blog-316aa.appspot.com",
  messagingSenderId: "229643257881",
  appId: "1:229643257881:web:43bb38ac82725f9c228288",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const authService = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
