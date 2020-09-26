import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyDFoJXht6HEzcjNZcdbkEe9pAdaZpLXW-s",
  authDomain: "emoji-for-the-minute.firebaseapp.com",
  databaseURL: "https://emoji-for-the-minute.firebaseio.com",
  projectId: "emoji-for-the-minute",
  storageBucket: "emoji-for-the-minute.appspot.com",
  messagingSenderId: "392696627240",
  appId: "1:392696627240:web:ae72b39da140121646751d",
  measurementId: "G-68D94QE19S",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getEmojis = () => {
  return db.collection("emojis");
};
