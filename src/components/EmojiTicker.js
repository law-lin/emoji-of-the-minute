import React, { useState } from "react";
import Ticker from "react-ticker";
import Emoji from "react-apple-emojis";
import upvote from "../images/upvote.png";
import downvote from "../images/downvote.png";
import { Avatar } from "antd";

function EmojiTicker() {
  let emojis = [
    { name: "cold-face", upvotes: 5, downvotes: 10 },
    { name: "face-with-tears-of-joy", upvotes: 10, downvotes: 5 },
    { name: "pig-face", upvotes: 15, downvotes: 1 },
    { name: "clown-face", upvotes: 22, downvotes: 6 },
    { name: "face-with-symbols-on-mouth", upvotes: 31, downvotes: 10 },
  ];

  const Emojis = ({ emojis }) => (
    <>
      {emojis.map((emoji) => (
        <>
          <Emoji key={emoji.name} name={emoji.name} width={48} />
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
                <img style={{ width: "20px" }} src={upvote} />
                <span
                  style={{ color: "white", margin: "0 20px", display: "block" }}
                >
                  {Math.abs(emoji.upvotes - emoji.downvotes)}
                </span>
              </>
            ) : (
              <>
                <img style={{ width: "20px" }} src={downvote} />
                <span
                  style={{ color: "white", margin: "0 20px", display: "block" }}
                >
                  {Math.abs(emoji.upvotes - emoji.downvotes)}
                </span>
              </>
            )}
          </div>
        </>
      ))}
    </>
  );

  return (
    <div style={{ backgroundColor: "black", padding: "10px" }}>
      <Ticker
        direction="toRight"
        speed={10}
        style={{ backgroundColor: "black" }}
      >
        {() => <Emojis emojis={emojis} />}
      </Ticker>
    </div>
  );
}

export default EmojiTicker;
