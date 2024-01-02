import React from "react";
import { useState } from "react";
import CreateEvent from "../event/create/CreateEvent";
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
  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, { ...items, id: 9 }];
    });
  };
  return <div></div>;
};

export default UserPage;
