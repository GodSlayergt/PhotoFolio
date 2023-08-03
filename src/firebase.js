import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmeS58eSwd9BNGdcCOfSJ3irJGX6A1r0Y",
  authDomain: "photofolio-315d9.firebaseapp.com",
  projectId: "photofolio-315d9",
  storageBucket: "photofolio-315d9.appspot.com",
  messagingSenderId: "166441239675",
  appId: "1:166441239675:web:66b9bc881fba1bafa14ede",
  measurementId: "G-RJVZ06N7WY"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
