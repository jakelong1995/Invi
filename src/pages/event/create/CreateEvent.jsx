import { useState, useEffect } from "react";
import { getAsync, createAsync } from "../../../api";

const CreateEvent = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    timeZone: "",
    eventLink: "",
    eventLocation: "",
    requireApproval: false,
    capacity: 0,
    image: "", // Assuming you want to upload an image
    color: "",
    typeFace: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
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
      setEvents(updatedEventsData);

      // Clear the form after adding the event
      setFormData({
        eventName: "",
        startDate: "",
        endDate: "",
        timeZone: "",
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
    <form className="bg-gray-400">
      {/* <h1>Event List</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.eventName}</li>
          // Display other event properties as needed
        ))}
      </ul> */}

      {/* User input form */}
      <div className="bg-white m-4 p-4">
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
        <button onClick={handleAdd}>Add Event</button>
      </div>
    </form>
  );
};
export default CreateEvent;
