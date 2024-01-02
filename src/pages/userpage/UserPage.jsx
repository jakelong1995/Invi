import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState(location.state);

  useEffect(() => {
    // Update formData if the location state changes
    setFormData(location.state);
  }, [location.state]);

  return (
    <div>
      <h2>User Page</h2>
      {formData ? (
        <>
          <p>Event Name: {formData.eventName}</p>
          {/* Display other form data as needed */}
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default UserPage;
