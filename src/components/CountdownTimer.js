import React, { useState } from "react";

function CountdownTimer() {
  const [now, setNow] = useState("");

  function sixtySeconds() {
    var timer = function () {
      var now = 1000 * Math.floor(Date.now() / 1000 + 0.1);
      var d = new Date();
      setNow(59 - d.getSeconds());
      setTimeout(timer, now + 1000 - Date.now());
    };
    timer();
  }
  setTimeout(sixtySeconds, 500);
  return (
    <div>
      <p
        style={{
          fontFamily: ["Montserrat", "sans-serif"],
          color: "#0697FF",
          fontSize: "32px",
          textAlign: "center",
        }}
      >
        <span style={{ color: "white", fontWeight: 800, fontSize: "48px" }}>
          {now}
        </span>{" "}
        seconds left
      </p>
    </div>
  );
}

export default CountdownTimer;
