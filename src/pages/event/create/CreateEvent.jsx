import React, { useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    timeZone: "",
    eventLocation: "",
    eventLink: "",
    requireApproval: "",
    limit: "",
    capacity: "",
    public: "",
    image: "",
    color: "",
    typeface: "",
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
        value={CreateEvent.eventName}
        onChange={handleChange}
        name="eventName"
        id="eventname"
      />
      <input
        type="datetime"
        placeholder="Start Date"
        value={CreateEvent.startDate}
        onChange={handleChange}
        name="startDate"
        id="startdate"
      />
      <input
        type="datetime"
        placeholder="End Date"
        value={CreateEvent.endDate}
        onChange={handleChange}
        name="endDate"
        id="enddate"
      />
      <input
        type="text"
        placeholder="Time Zone"
        value={CreateEvent.timeZone}
        onChange={handleChange}
        name="timeZone"
        id="timezone"
      />
      <input
        type="url"
        placeholder="Event Link"
        value={CreateEvent.eventLink}
        onChange={handleChange}
        name="eventLink"
        id="eventlink"
      />
      <input
        type="text"
        placeholder="Event Location"
        value={CreateEvent.eventLocation}
        onChange={handleChange}
        name="eventLocation"
        id="eventlocation"
      />
      <div>
        <div>Require Approval </div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={CreateEvent.requireApproval}
            onChange={handleChange}
            name="requireApproval"
            id="requireapproval"
            class="sr-only peer"
          />
          <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div>
        <div>Limit number of people</div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={CreateEvent.limit}
            onChange={handleChange}
            name="limit"
            id="limit"
            class="sr-only peer"
          />
          <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <input
        type="number"
        placeholder="Max no. of people"
        value={CreateEvent.capacity}
        onChange={handleChange}
        name="capacity"
        id="capacity"
      />
      <div>
        <div>Publicity</div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={CreateEvent.public}
            onChange={handleChange}
            name="public"
            id="public"
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
