import React, { useState, useEffect } from "react";
import Ticker from "react-ticker";
import Emoji from "react-apple-emojis";
import upvote from "../images/upvote.png";
import downvote from "../images/downvote.png";
import { getEmojis } from "./Firebase/firebase";

function EmojiTicker() {
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getEmojis().onSnapshot((querySnapshot) => {
      let emojiList = [];
      querySnapshot.forEach((doc) => {
        let emoji = {
          name: doc.data().name,
          upvotes: doc.data().upvotes,
          downvotes: doc.data().downvotes,
        };
        emojiList.push(emoji);
      });
      setEmojis(emojiList);
      setLoading(false);
    });
  }, []);

  console.log(emojis);
  const Emojis = ({ emojis }) => (
    <>
      {emojis.map((emoji) => (
        <React.Fragment key={emoji.name}>
          <Emoji name={emoji.name} width={48} />
          <div
            style={{
              verticalAlign: "top",
              display: "inline-block",
              textAlign: "center",
              marginRight: "50px",
            }}
          >
            {emoji.upvotes - emoji.downvotes > 0 ? (
              <>
                <img style={{ width: "20px" }} src={upvote} alt="upvote" />
                <span
                  style={{ color: "white", margin: "0 20px", display: "block" }}
                >
                  {Math.abs(emoji.upvotes - emoji.downvotes)}
                </span>
              </>
            ) : (
              <>
                <img style={{ width: "20px" }} src={downvote} alt="downvote" />
                <span
                  style={{ color: "white", margin: "0 20px", display: "block" }}
                >
                  {Math.abs(emoji.upvotes - emoji.downvotes)}
                </span>
              </>
            )}
          </div>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div style={{ backgroundColor: "black", padding: "10px" }}>
      {!loading && (
        <Ticker
          direction="toRight"
          speed={10}
          style={{ backgroundColor: "black" }}
        >
          {() => <Emojis emojis={emojis} />}
        </Ticker>
      )}
    </div>
  );
}

export default EmojiTicker;
