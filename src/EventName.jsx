import React from "react";
import { useState } from "react";

const EventName = () => {
  const [Eventname, setEventname] = useState();
  const updateEventname = (evn) => {
    setEventname(evn.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Event Name"
        value={Eventname}
        onChange={updateEventname}
        id="eventname"
      />
      <button type="submit">Submit</button>
    </div>
  );
};

export default EventName;

// import React, { useState } from 'react';

// const CreateEventForm = () => {
//   const [eventName, setEventName] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [startTime, setStartTime] = useState('');
//   const [endTime, setEndTime] = useState('');
//   const [timeZone, setTimeZone] = useState('');
//   const [isOnline, setIsOnline] = useState(false);
//   const [eventLocation, setEventLocation] = useState('');
//   const [meetingLink, setMeetingLink] = useState('');
//   const [requireApproval, setRequireApproval] = useState(false);
//   const [capacityLimit, setCapacityLimit] = useState('');
//   const [isPublic, setIsPublic] = useState(false);
//   const [backgroundColor, setBackgroundColor] = useState('#ffffff');
//   const [fontFamily, setFontFamily] = useState('Arial');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic to handle form submission
//     // You can access all the form data from the state variables
//     console.log({
//       eventName,
//       startDate,
//       endDate,
//       startTime,
//       endTime,
//       timeZone,
//       isOnline,
//       eventLocation,
//       meetingLink,
//       requireApproval,
//       capacityLimit,
//       isPublic,
//       backgroundColor,
//       fontFamily,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Event Name:
//         <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
//       </label>
//       <br />

//       <label>
//         Start Date:
//         <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//       </label>
//       <br />

//       <label>
//         End Date:
//         <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//       </label>
//       <br />

//       <label>
//         Start Time:
//         <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
//       </label>
//       <br />

//       <label>
//         End Time:
//         <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
//       </label>
//       <br />

//       <label>
//         Time Zone:
//         <input type="text" value={timeZone} onChange={(e) => setTimeZone(e.target.value)} />
//       </label>
//       <br />

//       <label>
//         Online or Offline:
//         <input type="checkbox" checked={isOnline} onChange={() => setIsOnline(!isOnline)} />
//       </label>
//       <br />

//       {isOnline ? (
//         <label>
//           Event Location (Online):
//           <input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
//         </label>
//       ) : (
//         <label>
//           Meeting Link (Offline):
//           <input type="text" value={meetingLink} onChange={(e) => setMeetingLink(e.target.value)} />
//         </label>
//       )}
//       <br />

//       <label>
//         Require Approval:
//         <input type="checkbox" checked={requireApproval} onChange={() => setRequireApproval(!requireApproval)} />
//       </label>
//       <br />

//       <label>
//         Capacity Limit:
//         <input type="number" value={capacityLimit} onChange={(e) => setCapacityLimit(e.target.value)} />
//       </label>
//       <br />

//       <label>
//         Public:
//         <input type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
//       </label>
//       <br />

//       <label>
//         Background Color:
//         <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
//       </label>
//       <br />

//       <label>
//         Typeface:
//         <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
//           <option value="Arial">Arial</option>
//           <option value="Verdana">Verdana</option>
//           <option value="Helvetica">Helvetica</option>
//           <option value="Times New Roman">Times New Roman</option>
//           <option value="Courier New">Courier New</option>
//           <option value="Georgia">Georgia</option>
//           <option value="Palatino">Palatino</option>
//           <option value="Garamond">Garamond</option>
//         </select>
//       </label>
//       <br />

//       <button type="submit">Create Event</button>
//     </form>
//   );
// };

// export default CreateEventForm;
