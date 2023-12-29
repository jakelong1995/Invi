import React, { useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    timeZone: "",
    eventLocation: "",
    eventLink: "",
    requireApproval: Boolean,
    capacityGuest: "",
    typeEvent: Boolean,
    imageInvit: "",
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
      <div>
        <div>Require Approval </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={CreateEvent.RequireApproval}
            onChange={handleChange}
            name="RequireApproval"
            id="requireapproval"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div>
        <div>Limit number of people</div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={CreateEvent.Capacity}
            onChange={handleChange}
            name="Capacity"
            id="capacity"
            class="sr-only peer"
          />
          <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <button type="submit">Submit</button>
    </>
  );
};

export default CreateEvent;
