import React from "react";
import { useState, useEffect } from "react";
import { getAsync } from "../../api";
import EventImg from "../../assets/youareinvited.webp";
import EventCard from "./EventCard";

const EventHomeStructure = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = await getAsync("event-management");
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="event-structure">
      <div className="event-info">
        <div className="event-detail">
          {events &&
            events.length > 0 &&
            events.map((event) => (
              <div key={event.id}>
                <EventCard
                  id={event.id}
                  eventName={event.data.eventName}
                  startDate={event.data.startDate}
                  eventLocation={event.data.eventLocation}
                />
              </div>
            ))}
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
