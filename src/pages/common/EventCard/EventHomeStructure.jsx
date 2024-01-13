import React from "react";
import { useState, useEffect } from "react";
import { getAsync } from "../../../api";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";

const EventHomeStructure = () => {
  const [events, setEvents] = useState([]);
  // set State for Tab
  const [currentTab, setCurrentTab] = useState("upcoming");

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

  const navigate = useNavigate();

  const navigateManageEvent = (itemId) => {
    navigate(`/Invi/event-management/${itemId}`);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toISOString(); // Chuyển đổi ngày hiện tại sang định dạng giống với ngày của Firebase
  };

  // Hàm để phân loại sự kiện thành Upcoming và Past
  const categorizeEvents = (events) => {
    const currentDate = getCurrentDate();

    const upcomingEvents = events.filter(
      (event) => event.data.startDate > currentDate
    );
    const pastEvents = events.filter(
      (event) => event.data.startDate <= currentDate
    );

    return { upcomingEvents, pastEvents };
  };

  const { upcomingEvents, pastEvents } = categorizeEvents(events);
  return (
    <div className="event-list flex flex-col items-center w-full">
      <div>
        <button onClick={() => setCurrentTab("upcoming")}>
          Upcoming Events
        </button>
        <button onClick={() => setCurrentTab("past")}>Past Events</button>
      </div>

      {currentTab === "upcoming" && (
        <div>
          {upcomingEvents.map((event) => (
            <div key={event.id}>
              <EventCard
                id={event.id}
                eventName={event.data.eventName}
                startDate={event.data.startDate}
                eventLocation={event.data.eventLocation}
                onClick={() => navigateManageEvent(event.id)}
              />
            </div>
          ))}
        </div>
      )}

      {currentTab === "past" && (
        <div>
          {pastEvents.map((event) => (
            <div key={event.id}>
              <EventCard
                id={event.id}
                eventName={event.data.eventName}
                startDate={event.data.startDate}
                eventLocation={event.data.eventLocation}
                onClick={() => navigateManageEvent(event.id)}
              />
            </div>
          ))}
        </div>
      )}
      {/* {events &&
        events.length > 0 &&
        events.map((event) => (
          <div key={event.id}>
            <EventCard
              id={event.id}
              eventName={event.data.eventName}
              startDate={event.data.startDate}
              eventLocation={event.data.eventLocation}
              onClick={() => navigateManageEvent(event.id)}
            />
          </div>
        ))} */}
    </div>
  );
};

export default EventHomeStructure;
