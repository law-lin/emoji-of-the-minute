import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAShvqTmOIr9VUzBXrLhGqsm5BXaH7X2FU",
  authDomain: "emoji-of-the-minute.firebaseapp.com",
  databaseURL: "https://emoji-of-the-minute.firebaseio.com",
  projectId: "emoji-of-the-minute",
  storageBucket: "emoji-of-the-minute.appspot.com",
  messagingSenderId: "300684065604",
  appId: "1:300684065604:web:00a6a9228d20bbf7be7511",
  measurementId: "G-YBE6MC2NB7",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getEmojis = () => {
  return db.collection("emojis");
};

export const upvoteEmoji = (name) => {
  db.collection("emojis")
    .doc(name)
    .set(
      {
        name,
        upvotes: firebase.firestore.FieldValue.increment(1),
        downvotes: firebase.firestore.FieldValue.increment(0),
        netVotes: firebase.firestore.FieldValue.increment(1),
        totalMinuteVotes: firebase.firestore.FieldValue.increment(1),
      },
      { merge: true }
    );
};

export const unUpvoteEmoji = (name) => {
  db.collection("emojis")
    .doc(name)
    .set(
      {
        name,
        upvotes: firebase.firestore.FieldValue.increment(-1),
        downvotes: firebase.firestore.FieldValue.increment(0),
        netVotes: firebase.firestore.FieldValue.increment(-1),
        totalMinuteVotes: firebase.firestore.FieldValue.increment(-1),
      },
      { merge: true }
    );
};

export const downvoteEmoji = (name) => {
  db.collection("emojis")
    .doc(name)
    .set(
      {
        name,
        upvotes: firebase.firestore.FieldValue.increment(0),
        downvotes: firebase.firestore.FieldValue.increment(1),
        netVotes: firebase.firestore.FieldValue.increment(-1),
        totalMinuteVotes: firebase.firestore.FieldValue.increment(-1),
      },
      { merge: true }
    );
};

export const unDownvoteEmoji = (name) => {
  db.collection("emojis")
    .doc(name)
    .set(
      {
        name,
        upvotes: firebase.firestore.FieldValue.increment(0),
        downvotes: firebase.firestore.FieldValue.increment(-1),
        netVotes: firebase.firestore.FieldValue.increment(1),
        totalMinuteVotes: firebase.firestore.FieldValue.increment(1),
      },
      { merge: true }
    );
};

export const resetVotes = () => {
  db.collection("emojis")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.update({
          totalMinuteVotes: 0,
        });
      });
    });
};
