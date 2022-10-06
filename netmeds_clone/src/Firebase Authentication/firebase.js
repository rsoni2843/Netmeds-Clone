// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import * as firebase from "firebase" ; 
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzAZkHy-eqHZjS5OuqqpTNhH0DOH7_ZVY",
  authDomain: "netmeds-rsoni2843.firebaseapp.com",
  projectId: "netmeds-rsoni2843",
  storageBucket: "netmeds-rsoni2843.appspot.com",
  messagingSenderId: "467547210334",
  appId: "1:467547210334:web:28045f57bbe0da71d1aacf",
  measurementId: "G-GYC1JKCE5G"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log(firebase)
export default firebase ; 