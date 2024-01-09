import React from "react";
import EventImg from "../../../assets/youareinvited.webp";

const EventCard = ({ id, eventName, startDate, eventLocation }) => {
  return (
    <div className="event-card" id={id}>
      <div>
        <p>{startDate}</p>
        <h2>{eventName}</h2>
        <p>{eventLocation}</p>
      </div>
      <div className="event-img">
        <img
          src={EventImg}
          alt="eventImg"
          style={{ height: 150, width: 150 }}
        />
      </div>
      <div className="event-button">
        <button>Manage Event</button>
      </div>
    </div>
  );
};

export default EventCard;
