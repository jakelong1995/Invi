import { useState, useEffect } from "react";
import { getAsync, createAsync } from "../../../api";

const CreateEvent = () => {
  const getDefaultStartDate = () => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 8, 0, 0, 0); // Round to the next hour
    return currentDate.toISOString().slice(0, 16); // Format as "YYYY-MM-DDTHH:mm"
  };
  const getDefaultEndDate = () => {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 9, 0, 0, 0); // Round to the next hour
    return currentDate.toISOString().slice(0, 16); // Format as "YYYY-MM-DDTHH:mm"
  };
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    eventName: "",
    startDate: getDefaultStartDate(),
    endDate: getDefaultEndDate(),
    eventOnline: false,
    eventLink: "",
    eventLocation: "",
    requireApproval: false,
    capacity: 0,
    image: "", // Assuming you want to upload an image
    color: "",
    typeFace: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  };

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

  const handleAdd = async () => {
    try {
      // Create an event based on user input
      const eventData = {
        eventName: formData.eventName,
        startDate: formData.startDate,
        endDate: formData.endDate,
        timeZone: formData.timeZone,
        eventLink: formData.eventLink,
        eventLocation: formData.eventLocation,
        requireApproval: formData.requireApproval,
        capacity: formData.capacity,
        image: formData.image,
        color: formData.color,
        typeFace: formData.typeFace,
      };

      // Add the new event to the API
      await createAsync("event-management", eventData);

      // Refetch the updated events data after adding a new event
      const updatedEventsData = await getAsync("event-management");
      setEvents(updatedEventsDsata);

      // Clear the form after adding the event
      setFormData({
        eventName: "",
        startDate: "",
        endDate: "",
        eventLink: "",
        eventLocation: "",
        requireApproval: false,
        capacity: 0,
        image: "",
        color: "",
        typeFace: "",
      });
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <form className="bg-white m-4 p-4 rounded-lg flex">
      <div className="flex flex-col">
        <input
          className="font-semibold text-3xl text-gray-700 placeholder-gray-300 mb-6"
          type="text"
          placeholder="Event Name"
          value={formData.eventName}
          onChange={handleChange}
          name="eventName"
          id="eventname"
        />

        <div className="bg-gray-100 rounded-lg p-2 gap-2 flex flex-col mb-4">
          <div className="flex pl-1 justify-between items-center">
            <div>Start</div>
            <input
              className="bg-gray-200 p-2 rounded"
              type="datetime-local"
              placeholder="Start Date"
              value={formData.startDate}
              onChange={handleChange}
              name="startDate"
              id="startdate"
            />
          </div>

          <div className="flex pl-1 justify-between items-center">
            <div>End</div>
            <input
              className="bg-gray-200 p-2 rounded"
              type="datetime-local"
              placeholder="End Date"
              value={formData.endDate}
              onChange={handleChange}
              name="endDate"
              id="enddate"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div>Online Event ?</div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={formData.eventOnline}
              onChange={handleChange}
              name="eventOnline"
              id="eventonline"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {formData.eventOnline ? (
          // Render Event Link field if eventOnline is true
          <input
            className="bg-gray-100 p-4 rounded-lg mb-4"
            type="url"
            placeholder="Event Link"
            value={formData.eventLink}
            onChange={handleChange}
            name="eventLink"
            id="eventlink"
          />
        ) : (
          // Render Event Location field if eventOnline is false
          <input
            className="bg-gray-100 p-4 rounded-lg mb-4"
            type="text"
            placeholder="Event Location"
            value={formData.eventLocation}
            onChange={handleChange}
            name="eventLocation"
            id="eventlocation"
          />
        )}
        <div className="text-sm font-medium text-gray-500 mb-2">
          Event Options
        </div>
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
      </div>

      <div>
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
          value={formData.color || "#000000"}
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
        <button onClick={handleAdd}>Add Event</button>
      </div>
    </form>
  );
};
export default CreateEvent;
