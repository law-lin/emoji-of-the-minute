import React from "react";
import EmojiTicker from "./EmojiTicker";
import EmojiOfTheMinute from "./EmojiOfTheMinute";
import CountdownTimer from "./CountdownTimer";
import EmojiSelector from "./EmojiSelector";

function HomePage() {
  return (
    <div style={{ backgroundColor: "#4B4B4B", height: "100%" }}>
      <EmojiTicker />
      <h1
        style={{
          textAlign: "center",
          fontFamily: ["Montserrat", "sans-serif"],
          color: "white",
          fontWeight: 800,
        }}
      >
        Emoji of the Minute
      </h1>
      <EmojiOfTheMinute />
      <CountdownTimer />
      <EmojiSelector />
    </div>
  );
}

export default HomePage;
