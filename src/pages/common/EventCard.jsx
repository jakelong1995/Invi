import React from "react";

const EventCard = ({ id, eventName, startDate, eventLocation }) => {
  const randomGuest = Math.random();

  // Check if the values are valid before rendering

  return (
    <div className="event-card">
      <p>{startDate}</p>
      <h2>{eventName}</h2>
      <p>{eventLocation}</p>
      <p>{randomGuest}</p>
    </div>
  );
};


export default EventCard;
