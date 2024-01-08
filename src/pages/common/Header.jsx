import React from "react";
import star from "../../assets/star.png";
import ticket from "../../assets/ticket.png";
import searchImg from "../../assets/search.jpg";
import bellImg from "../../assets/bell.svg";
import userAvt from "../../assets/userAvt.png";
import moonStar from "../../assets/moonStar.png";
import Clock from "./clock";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../Firebase";
import { useState } from "react";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { useNavigate } from "react-router-dom/dist";

const Header = () => {
  const [user, setUser] = useState();

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        if (loggedInUser?.displayName) {
          localStorage.setItem("userName", loggedInUser.displayName);
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
        navigate("/")
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

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
        <Clock />
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

        <Popup
          trigger={
            <button>
              <img src={bellImg} alt="notifiIcon" style={{ height: 20 }} />
            </button>
          }
          position="bottom right"
        >
          <div className="modalContent flex flex-col items-center text-center p-4 ">
            <img
              src={moonStar}
              alt="moonStar"
              style={{ height: 20, width: 20 }}
              className="m-3"
            />
            <h6>It's Quiet Here</h6>
            <p>Create an event and invite some friends.</p>
          </div>
        </Popup>

        <Popup
          trigger={
            <button>
              <img src={userAvt} alt="userAvt" style={{ height: 20 }} />
            </button>
          }
          position="bottom right"
        >
          <div className="modalContent flex flex-col items-center text-center">
            <button className="w-full hover:bg-gray-200 flex flex-col items-center">
              <div className="userArea flex items-center ">
                <div className="avtUser">
                  <img src={userAvt} alt="userAvt" style={{ height: 30 }} />
                </div>
                <div className="infoUser">
                  <p className="text-sm">{ localStorage.getItem("userName")}</p>
                  <p className="text-xs">Personal</p>
                </div>
              </div>
            </button>
            <button className="w-full hover:bg-gray-200">View Profile</button>
            <button className="w-full hover:bg-gray-200">Settings</button>
            <button className="w-full hover:bg-gray-200" onClick={handleSignOut}>Sign Out</button>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Header;
