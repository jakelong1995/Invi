import React, { useState } from "react";

const CreateEvent = () => {
  const [] = useState({
    EventName: "",
    StartDate: "",
    EndDate: "",
    TimeZone: "",
    EventLocation: "",
    RequireApproval: "",
    Capacity: "",
    Public: "",
    Color: "",
    Typeface: "",
  });
  const handleChange = (e) => {
    const changedField = e.target.value;
    const newValue = e.target.value;
    console.log(changedField, newValue);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Event Name"
          value={CreateEvent.EventName}
          onChange={handleChange}
          name="EventName"
          id="eventname"
        />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default CreateEvent;
