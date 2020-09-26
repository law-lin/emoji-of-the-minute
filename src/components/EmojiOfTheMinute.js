import React, { useEffect, useState } from "react";
import Emoji from "react-apple-emojis";
import { getEmojis } from "./Firebase/firebase";

function EmojiOfTheMinute() {
  const [name, setName] = useState("");

  useEffect(() => {
    getEmojis()
      .orderBy("upvotes", "desc")
      .limit(1)
      .get()
      .then((querySnapshot) => {
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
        width={350}
      />
    </>
  );
}

export default EmojiOfTheMinute;
