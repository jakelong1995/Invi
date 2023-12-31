import React from "react";
import { useState } from "react";
const UserPage = () => {
  const [items, setItems] = useState([
    {
      eventName: "Event",
      startDate: "14/2/2024 19:00",
      endDate: "14/2/2024 22:00",
      timeZone: "GMT +7",
      eventLocation: "111 Thân Văn Nhiếp P An Phú Tp Thủ Đức",
      eventLink: "abc",
      requireApproval: false,
      limit: true,
      capacity: 6,
      image: "",
      color: "",
      typeFace: "",
    },
  ]);
  return <div>{items.eventName}</div>;
};

export default UserPage;
