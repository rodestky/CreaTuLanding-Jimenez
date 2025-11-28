// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // verificar que no sea el lite
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK50L19bpI6V6tOsGi_4uWqWlymTlR1fE",
  authDomain: "the-wizards-table.firebaseapp.com",
  projectId: "the-wizards-table",
  storageBucket: "the-wizards-table.firebasestorage.app",
  messagingSenderId: "1003796986946",
  appId: "1:1003796986946:web:0cf40e980c95d9efe981db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

// exportamos la instancia de firebase para no hacerlo a cada rato esto es adicional a lo que da firebase

export const db = getFirestore(app);