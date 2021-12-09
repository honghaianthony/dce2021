// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2lrmCCpBxlK-uy6RYuA4frBpRaS5DjPk",
  authDomain: "dce2021.firebaseapp.com",
  projectId: "dce2021",
  storageBucket: "dce2021.appspot.com",
  messagingSenderId: "218732133320",
  appId: "1:218732133320:web:7cfdf42af2956f6770defd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
