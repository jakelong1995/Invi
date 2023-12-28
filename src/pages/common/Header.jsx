import React from "react";
import star from "../../assets/star.png";
import ticket from "../../assets/ticket.png";
import searchImg from "../../assets/search.jpg";
import bellImg from "../../assets/bell.svg";
import userAvt from "../../assets/userAvt.png";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { useNavigate } from "react-router-dom/dist";

const Header = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/Home");
  };
  const navEventCreate = () => {
    navigate("/create-event");
  };
  const navHelp = () => {
    window.open("https://help.lu.ma/");
  };

  function search(e) {
    e.preventDefault();
  }
  return (
    <div className="menuHeader flex justify-between items-center">
      <div className="iconHome">
        <img src={star} alt="star" style={{ height: 20 }} />
      </div>
      <div className="tabHome flex">
        <img src={ticket} alt="ticket" style={{ height: 20 }} />
        <button onClick={navigateHome}>Events</button>
      </div>
      <div className="extHome flex gap-4">
        <p>Time clock</p>
        <button onClick={navEventCreate}>Create Event</button>
        <Popup
          trigger={
            <button>
              <img src={searchImg} alt="search" style={{ height: 20 }} />
            </button>
          }
          modal
          nested
          position="right center"
        >
          <div className="modalContent flex flex-col">
            <div className="w-full max-w-xl flex text-xl">
              <input
                type="text"
                className="w-full placeholder-gray-400 text-gray-900 p-2"
                placeholder="Search for events, calendars and more..."
                onChange={search}
              />
            </div>
            <hr />
            <label>Shortcuts</label>
            <button>Create Event</button>
            <button>Open Home</button>
            <button onClick={navHelp}>Open Help</button>
          </div>
        </Popup>
        <img src={bellImg} alt="notifiIcon" style={{ height: 20 }} />
        <img src={userAvt} alt="userAvt" style={{ height: 20 }} />

      </div>
    </div>
  );
};

export default Header;
