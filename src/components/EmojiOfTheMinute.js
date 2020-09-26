import React, { useState, useEffect } from "react";
import Emoji from "react-apple-emojis";
import { resetVotes } from "./Firebase/firebase";
function EmojiOfTheMinute() {
  const [name, setName] = useState("");
  const [seconds, setSeconds] = useState(null);
  useEffect(() => {
    if (name === "") {
      fetch(
        "https://us-central1-emoji-for-the-minute.cloudfunctions.net/updateEmojiOfTheMinute"
      )
        .then((response) => response.json())
        .then((jsonData) => {
          setName(jsonData.name);
          sixtySeconds();
        });
    }
  }, [name]);

  function sixtySeconds() {
    var timer = function () {
      var now = 1000 * Math.floor(Date.now() / 1000 + 0.1);
      var d = new Date();
      const seconds = 59 - d.getSeconds();

      console.log(seconds);
      if (seconds === 0) {
        fetch(
          "https://us-central1-emoji-for-the-minute.cloudfunctions.net/updateEmojiOfTheMinute"
        )
          .then((response) => response.json())
          .then((jsonData) => {
            setName(jsonData.name);
            resetVotes();
          });
      }
      setTimeout(timer, now + 1000 - Date.now());
    };
    timer();
  }

  return (
    <>
      <Emoji
        style={{ margin: "0 auto", display: "block" }}
        name={name}
        width={250}
      />
    </>
  );
}

export default EmojiOfTheMinute;
