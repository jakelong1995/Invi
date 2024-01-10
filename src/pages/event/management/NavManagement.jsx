import React from "react";
import { useState, useEffect } from "react";
import { getAsync } from "../../../api";
import { useParams } from "react-router-dom";

const NavManagement = () => {
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
    <div className="navManagement">
      <div className="navTitle">
        <div className="navEventName">
          <h2>{events.eventName}</h2>
        </div>
        <div className="toUserPage"></div>
      </div>
      <div className="navPanel">{/* Some options */}</div>
    </div>
  );
};

export default NavManagement;
