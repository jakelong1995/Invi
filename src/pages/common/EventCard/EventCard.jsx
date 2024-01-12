import React from "react";
import { useNavigate } from "react-router-dom";
import EventImg from "../../../assets/youareinvited.webp";
import { useState, useEffect } from "react";
import { getAsync } from "../../../api";

const EventCard = ({ id, eventName, startDate, eventLocation, onClick }) => {
  // Slice Time out of String
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

  // End of 1

  const navigate = useNavigate();
  const navigateManageEvent = (itemId) => {
    navigate(`/Invi/event-management/${itemId}`);
  };

  // Slice Time out of string
  // Function to extract time from a date string
  const extractTime = (dateTimeString) => {
    const dateObject = new Date(dateTimeString);
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;
  };
  // End of 2
  return (
    <div className="event-card flex flex-col w-96">
      <div className="event-info relative flex w-full  ">
        <div className="event-detail w-full">
          <p>{extractTime(startDate)}</p>
          <h2>{eventName}</h2>
          <p>
            <span className="material-symbols-rounded">location_on</span>
            {eventLocation}
          </p>
        </div>
        <div className="event-img w-full">
          <img
            src={EventImg}
            alt="eventImg"
            style={{ height: 150, width: 150 }}
          />
        </div>
      </div>
      <div className="event-button relative bottom-9 ">
        <button
          className="px-4 py-2 bg-black bg-opacity-5 hover:bg-gray-500 hover:text-white hover: border-none rounded-xl inline-flex text-gray-500 text-sm font-semibold"
          onClick={() => navigateManageEvent(id)}
        >
          Manage Event
          <span className="material-symbols-rounded ml-0.5 -mb-3.5">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
