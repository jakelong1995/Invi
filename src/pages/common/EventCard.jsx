import React from "react";

const EventCard = ({id, eventName, startDate, eventLocation}) => {
  return <div className="event-card" id={id}>
    <p>{startDate}</p>
    <h2>{eventName}</h2>
    <p>{eventLocation}</p>
  </div>;
};

export default EventCard;
