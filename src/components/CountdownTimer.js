import React, { useState } from "react";

function CountdownTimer() {
  const [now, setNow] = useState("");

  function sixtySeconds() {
    var timer = function () {
      var now = 1000 * Math.floor(Date.now() / 1000 + 0.1);
      setNow(Date(now).toString());
      setTimeout(timer, now + 1000 - Date.now());
    };
    timer();
  }
  setTimeout(sixtySeconds, 500);
  return (
    <div>
      <p>time is: {now}</p>
    </div>
  );
}

export default CountdownTimer;
