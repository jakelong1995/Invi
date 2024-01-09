import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const Clock = () => {
  const gmtOffset = "+07:00";
  const [gmtTime, setGmtTime] = useState("");

  useEffect(() => {
    // Parse the offset string to get the hour and minute components
    const [hours, minutes] = gmtOffset.split(":").map(Number);

    // Determine the sign for the GMT offset
    const sign = hours >= 0 ? "+" : "-";

    // Format the GMT string
    const gmtTime = `GMT${sign}${Math.abs(hours) > 9 ? hours : "" + hours}`;

    // Set up the interval to update every second
    const intervalId = setInterval(() => {
      // Create a moment object with the specified GMT offset
      const currentTime = moment().utcOffset(gmtOffset);

      // Apply the GMT+7 offset
      const gmtPlus7Time = currentTime.format("h:mm A ");
      setGmtTime(`${gmtPlus7Time} ${gmtTime}`);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="mt-1">
      <p>{gmtTime}</p>
    </div>
  );
};

export default Clock;
