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

  return (
    <div>
      <Header />
      <div className="navManagement">
        <div className="navTitle">
          <div className="navEventName" id={itemId}>
            <h2>{events.eventName}</h2>
          </div>
          <div className="toUserPage"></div>
        </div>
        <div className="navPanel">{/* Some options */}</div>
      </div>
      <Footer />
    </div>
  );
};

export default EventManagement;
