import React from "react";
import star from "../../assets/star.png";
import ticket from "../../assets/ticket.png";
import { useNavigate } from "react-router-dom/dist";

const Header = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/Home");
  };
  const navEventCreate =() => {
    navigate("/CreateEvent");
  };
  return (
    <div className="menuHeader flex">
      <div className="iconHome">
        <img src={star} alt="star" style={{ height: 20 }} />
      </div>
      <div className="tabHome flex">
        <img src={ticket} alt="ticket" style={{ height: 20 }} />
        <button onClick={navigateHome}>Events</button>
      </div>
      <div className="extHome">
        <p>Time clock</p>
        <button onClick={navEventCreate}>Create Event</button>
      </div>
    </div>
  );
};

export default Header;
