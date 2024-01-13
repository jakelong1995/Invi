import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAsync } from "../../../api";

const EventManagement = () => {
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

  const { itemId } = useParams();
  const selectedEvent = events.find((event) => event.id === itemId);

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to get a formatted date string
  const getFormattedDate = (dateTimeString) => {
    const dateObject = new Date(dateTimeString);

    // Format the date as "Friday, 18 Jan"
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
    });
    return formattedDate;
  };

  // Function to format date and time
  const formatDateTime = (dateTimeString) => {
    const dateObject = new Date(dateTimeString);

    // Format the time manually
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${hours % 12 || 12}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;

    // Format the date using toLocaleDateString
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    // Get the time zone offset and create a string like "GMT+7"
    const timeZoneOffset = dateObject.getTimezoneOffset();
    const timeZoneString = `GMT${timeZoneOffset > 0 ? "-" : "+"}${Math.abs(
      timeZoneOffset / 60
    )}`;

    return `${formattedTime} - ${formattedDate}, ${timeZoneString}`;
  };
  return (
    <div>
      <Header />
      <div className="navManagement flex flex-col items-center justify-around w-2/3 m-auto ">
        <div className="navTitle flex flex-row justify-between ">
          <div className="navEventName">
            <h2>
              {selectedEvent ? selectedEvent.data.eventName : "Event Not Found"}
            </h2>
          </div>

          <div className="toUserPage">
            <button>
              Event Page
              <span className="material-symbols-rounded ">north_east</span>
            </button>
          </div>
        </div>

        <div className="navPanel">
          <div className="tab-buttons flex gap-4">
            <button
              onClick={() => handleTabClick("tab1")}
              className={activeTab === "tab1" ? "active" : ""}
            >
              Overview
            </button>
            <button
              onClick={() => handleTabClick("tab2")}
              className={activeTab === "tab2" ? "active" : ""}
            >
              Guests
            </button>
            {/* Add more buttons for additional tabs */}
          </div>

          <div className="tab-content">
            {activeTab === "tab1" && (
              <div className="overviewContent">
                <h4>When & Where</h4>
                <div className="overviewDate flex">
                  <div>
                    <span className="material-symbols-rounded">today</span>
                  </div>
                  <div>
                    <h1>
                      {selectedEvent
                        ? `${getFormattedDate(selectedEvent.data.startDate)}`
                        : "Event Not Found"}
                    </h1>
                    <p>
                      {selectedEvent
                        ? `${formatDateTime(selectedEvent.data.startDate)}`
                        : "Event Not Found"}
                    </p>
                  </div>
                </div>
                <div className="overviewLocation flex">
                  <div>
                    <span className="material-symbols-rounded">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h1>
                      {selectedEvent
                        ? selectedEvent.data.eventLocation
                        : "Event Not Found"}
                    </h1>
                  </div>
                </div>
                <span className="small-warn">
                  The address is shown publicly on the event page.
                </span>
                <div>
                  <button className="px-4 py-2 bg-black bg-opacity-5 hover:bg-gray-500 hover:text-white hover: border-none rounded-xl inline-flex text-gray-500 text-sm font-semibold">
                    Edit Event
                  </button>
                </div>
              </div>
            )}
            {activeTab === "tab2" && <div>Content for Tab 2</div>}
            {/* Add more content for additional tabs */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventManagement;
