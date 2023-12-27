import React, { useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    EventName: "",
    StartDate: "",
    EndDate: "",
    TimeZone: "",
    EventLocation: "",
    EventLink: "",
    RequireApproval: "",
    Capacity: "",
    Public: "",
    Image: "",
    Color: "",
    Typeface: "",
  });
  const handleChange = (e) => {
    const changedField = e.target.name;
    const newValue = e.target.value;
    setFormData((currData) => {
      currData[changedField] = newValue;
      return { ...currData };
    });
  };
  return (
    <>
      <input
        type="text"
        placeholder="Event Name"
        value={CreateEvent.EventName}
        onChange={handleChange}
        name="EventName"
        id="eventname"
      />
      <input
        type="datetime"
        placeholder="Start Date"
        value={CreateEvent.StartDate}
        onChange={handleChange}
        name="StartDate"
        id="startdate"
      />
      <input
        type="datetime"
        placeholder="End Date"
        value={CreateEvent.EndDate}
        onChange={handleChange}
        name="EndDate"
        id="enddate"
      />
      <input
        type="text"
        placeholder="Time Zone"
        value={CreateEvent.TimeZone}
        onChange={handleChange}
        name="TimeZone"
        id="timezone"
      />
      <input
        type="url"
        placeholder="Event Link"
        value={CreateEvent.EventLink}
        onChange={handleChange}
        name="EventLink"
        id="eventlink"
      />
      <input
        type="text"
        placeholder="Event Location"
        value={CreateEvent.EventLocation}
        onChange={handleChange}
        name="EventLocation"
        id="eventlocation"
      />
      <input
        type="boolean"
        value={CreateEvent.requireApproval}
        onChange={handleChange}
        name="RequireApproval"
        id="requireapproval"
      />
      <button type="submit">Submit</button>
    </>
  );
};

export default CreateEvent;
