import React from "react";
import EmojiTicker from "./EmojiTicker";
import EmojiOfTheMinute from "./EmojiOfTheMinute";
import CountdownTimer from "./CountdownTimer";

function HomePage() {
  return (
    <div style={{ backgroundColor: "#4B4B4B", height: "100vh" }}>
      <EmojiTicker />
      <h1 style={{ textAlign: "center" }}>Emoji of the Minute</h1>
      <EmojiOfTheMinute />
      <CountdownTimer />
    </div>
  );
}

export default HomePage;
