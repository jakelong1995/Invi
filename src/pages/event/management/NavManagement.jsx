import React from "react";
import { useState, useEffect } from "react";
import { getAsync } from "../../../api";

const NavManagement = () => {
  const [events, setEvents] = useState([]);
  const [targetIdEvents, setTargetIdEvents] = useState([]);
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

  // Function to handle click event
  const handleEventClick = (eventId) => {
    // Find the clicked event by ID
    const clickedEvent = events.find((event) => event.id === eventId);

    // Log the ID and data or perform other actions
    if (clickedEvent) {
      console.log("Clicked Event ID:", eventId);
      console.log("Clicked Event Data:", clickedEvent.data);
      // setTargetIdEvents(clickedEvent.data);
      // You can perform other actions here based on the clicked event
    }
  };

  return (
    <div className="navManagement">
      <div className="navTitle">
        <div className="navEventName">
          {events.map((event) => (
            <div key={event.id} onClick={() => handleEventClick(event.id)}>
              <h2>{event.data.eventName}</h2>
            </div>
          ))}
        </div>
        <div className="toUserPage"></div>
      </div>
      <div className="navPanel">{/* Some options */}</div>
    </div>
  );
};

export default NavManagement;
