import React, { useState } from "react";
import Countdown from "react-countdown";

function CountdownTimer() {
  const [date, setDate] = useState(Date.now() + 60000);

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      setDate(Date.now() + 60000);
    }
  };
  return (
    <div>
      <Countdown date={date} renderer={renderer} />
    </div>
  );
}

export default CountdownTimer;
