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

export const upvoteEmoji = (name) => {
  db.collection("emojis")
    .doc(name)
    .set({
      name,
      upvotes: firebase.firestore.FieldValue.increment(1),
      downvotes: firebase.firestore.FieldValue.increment(0),
      netVotes: firebase.firestore.FieldValue.increment(1),
    });
};

export const unUpvoteEmoji = (name) => {
  db.collection("emojis")
    .doc(name)
    .set({
      name,
      upvotes: firebase.firestore.FieldValue.increment(-1),
      downvotes: firebase.firestore.FieldValue.increment(0),
      netVotes: firebase.firestore.FieldValue.increment(-1),
    });
};

export const downvoteEmoji = (name) => {
  db.collection("emojis")
    .doc(name)
    .set({
      name,
      upvotes: firebase.firestore.FieldValue.increment(0),
      downvotes: firebase.firestore.FieldValue.increment(1),
      netVotes: firebase.firestore.FieldValue.increment(-1),
    });
};

export const unDownvoteEmoji = (name) => {
  db.collection("emojis")
    .doc(name)
    .set({
      name,
      upvotes: firebase.firestore.FieldValue.increment(0),
      downvotes: firebase.firestore.FieldValue.increment(-1),
      netVotes: firebase.firestore.FieldValue.increment(1),
    });
};
