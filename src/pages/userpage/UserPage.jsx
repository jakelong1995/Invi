import React from "react";

const UserPage = (props) => {
  const formData = props.location?.state;

  return (
    <div>
      <h2>User Page</h2>
      {formData ? (
        <>
          <p>Event Name: {formData.eventName}</p>
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default UserPage;
