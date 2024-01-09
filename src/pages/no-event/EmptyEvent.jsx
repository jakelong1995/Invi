import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import calendar from "../../assets/calendar.png";

const EmptyEvent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleAddEvent = () => {
    navigate("/Invi/create-event");
  };
  return (
    <div className="emptyComponent flex flex-col justify-center w-3/5 mx-auto">
      <div className="titleComponent flex justify-between">
        <h1>Events</h1>

        <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
              !isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
            }`}
          >
            Upcoming
          </span>
          <span
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
              isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
            }`}
          >
            Past
          </span>
        </label>
      </div>

      <div className="contentComponent flex flex-col items-center gap-6">
        <img src={calendar} alt="calendar" style={{ height: 150, width: 150 }} />
        <h4>No Upcoming Events</h4>
        <p>You have no upcoming events. Why not host one?</p>
        <button onClick={handleAddEvent} className="rounded border-2 p-1 ">+ Create event</button>
      </div>
    </div>
  );
};

export default EmptyEvent;
