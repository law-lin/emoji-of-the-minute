const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({ origin: true });

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

const app = express();

exports.updateEmojiOfTheMinute = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    db.collection("emojis")
      .orderBy("totalMinuteVotes", "desc")
      .limit(1)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          res.json({ name: doc.data().name });
        });
      });
  });
});
