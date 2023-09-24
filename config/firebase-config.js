// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSsnvF6SRMO76Ru2fe_u7AzVKa_adjIIU",
  authDomain: "mane-chicken.firebaseapp.com",
  projectId: "mane-chicken",
  storageBucket: "mane-chicken.appspot.com",
  messagingSenderId: "1002272274150",
  appId: "1:1002272274150:web:e0c01dff15ccff4b582d27",
  measurementId: "G-289HL7Z3GL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);