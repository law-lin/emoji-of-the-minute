import React, { useEffect, useState } from "react";
import Emoji from "react-apple-emojis";
import { getEmojis } from "./Firebase/firebase";

function EmojiOfTheMinute() {
  const [name, setName] = useState("");

  // change onSnapshot to .get().then() once 60 second interval function is implemented
  useEffect(() => {
    getEmojis()
      .orderBy("netVotes", "desc")
      .limit(1)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setName(doc.data().name);
        });
      });
  }, []);

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
