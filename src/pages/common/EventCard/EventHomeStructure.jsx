import React from "react";
import { useState, useEffect } from "react";
import { getAsync } from "../../../api";
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
    <div className="event-list flex flex-col items-center w-full">
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
  );
};

export default EventHomeStructure;
