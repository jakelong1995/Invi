import React from "react";
import { useState, useEffect } from "react";
import { getAsync } from "../../../api";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";

const EventHomeStructure = () => {
  const navigate = useNavigate();

  const navigateManageEvent = (itemId) => {
    navigate(`/Invi/event-management/${itemId}`);
  };
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
              onClick={navigateManageEvent(event.id)}
            />
          </div>
        ))}
    </div>
  );
};

export default EventHomeStructure;
