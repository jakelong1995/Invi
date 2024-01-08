import React from "react";
import EventImg from "../../assets/youareinvited.webp";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase";
import EventCard from "./EventCard";

const EventHomeStructure = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskColRef = query(collection(db, "task-management"));
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="event-structure">
      <div className="event-info">
        <div className="event-detail">
        {tasks.map((task) => (
            <EventCard
              id={task.id}
              key={task.id}
              eventName={task.eventName}
              startDate={task.startDate}
              eventLocation={task.eventLocation}
            />
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
