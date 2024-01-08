import React from "react";
import EventImg from "../../assets/youareinvited.webp";
const EventHomeStructure = () => {
  return (
    <div className="event-structure">
      <div className="event-info">
        <div className="event-detail">
          
        </div>
        <div className="event-img">
          <img
            src={EventImg}
            alt="eventImg"
            style={{ height: 150, width: 150 }}
          />
        </div>
      </div>
      <div className="event-button">
        <button>Manage Event</button>
      </div>
    </div>
  );
};

export default EventHomeStructure;
