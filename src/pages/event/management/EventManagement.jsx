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
          <div className="tab-buttons flex ">
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
              <div className="overviewContent bg-red-700">
                <h4>When & Where</h4>
                <div className="overviewDate">
                {selectedEvent ? selectedEvent.data.startDate : "Event Not Found"}
                </div>
                <div className="overviewLocation">

                </div>
                <div></div>
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
