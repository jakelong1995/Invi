import React from "react";

const EventCard = (id, eventName, startDate, eventLocation) => {
    const randomGuest = Math.random();
  return <div className="event-card" id={id}>
    <p>{startDate}</p>
    <h2>{eventName}</h2>
    <p>{eventLocation}</p>
    <p>{randomGuest}</p>
  </div>;
};

export default EventCard;
