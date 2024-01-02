import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const navigate = useNavigate();
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
    image: "",
    color: "",
    typeFace: "",
  });
  const handleChange = (e) => {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/user-page", { state: formData });
  };
  return (
    <>
      <input
        type="text"
        placeholder="Event Name"
        value={formData.eventName}
        onChange={handleChange}
        name="eventName"
        id="eventname"
      />
      <input
        type="datetime-local"
        placeholder="Start Date"
        value={formData.startDate}
        onChange={handleChange}
        name="startDate"
        id="startdate"
      />
      <input
        type="datetime-local"
        placeholder="End Date"
        value={formData.endDate}
        onChange={handleChange}
        name="endDate"
        id="enddate"
      />
      <input
        type="text"
        placeholder="Time Zone"
        value={formData.timeZone}
        onChange={handleChange}
        name="timeZone"
        id="timezone"
      />
      <input
        type="url"
        placeholder="Event Link"
        value={formData.eventLink}
        onChange={handleChange}
        name="eventLink"
        id="eventlink"
      />
      <input
        type="text"
        placeholder="Event Location"
        value={formData.eventLocation}
        onChange={handleChange}
        name="eventLocation"
        id="eventlocation"
      />
      <div>
        <div>Require Approval </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={formData.requireApproval}
            onChange={handleChange}
            name="requireApproval"
            id="requireapproval"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <input
        type="number"
        placeholder="Max no. of people"
        value={formData.capacity}
        onChange={handleChange}
        name="capacity"
        id="capacity"
      />
      <input
        type="image"
        src=""
        value={formData.image}
        onChange={handleChange}
        alt="image"
        name="image"
        id="image"
      />
      <input
        type="color"
        value={formData.color}
        onChange={handleChange}
        name="color"
        id="color"
      />
      <input
        type="text"
        placeholder="Typeface"
        value={formData.typeFace}
        onChange={handleChange}
        name="typeFace"
        id="typeFace"
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default CreateEvent;
