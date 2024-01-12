import React from "react";
import userAvt from "../../assets/userAvt.png";
import moonStar from "../../assets/moonStar.png";
import Clock from "./clock";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../Firebase";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { useNavigate } from "react-router-dom/dist";

const Header = () => {
  const [user, setUser] = useState();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
        navigate("/Invi/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const navigateHome = () => {
    navigate("/Invi/home");
  };
  const navEventCreate = () => {
    navigate("/Invi/create-event");
  };
  const navHelp = () => {
    window.open("https://help.lu.ma/");
  };

  let [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "/src/assets/youareinvited.webp"
  );
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="menuHeader flex justify-between items-center">
      <div className="iconHome">
        <button onClick={navigateHome}>
          <span className="material-symbols-rounded mt-1 ml-2">star</span>
        </button>
      </div>
      <div className="tabHome flex ml-24">
        <span className="material-symbols-rounded mr-1">local_activity</span>
        <button onClick={navigateHome}>Events</button>
      </div>
      <div className="extHome static flex gap-4">
        <Clock />
        <button onClick={navEventCreate}>Create Event</button>

        <button type="button" onClick={openModal}>
          <span className="material-symbols-rounded mt-1">search</span>
        </button>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="w-full max-w-xl flex text-xl">
                        <input
                          type="text"
                          className="w-full placeholder-gray-400 text-gray-900 p-2"
                          placeholder="Search for events, calendars and more..."
                        />
                      </div>
                      <hr />
                      <label>Shortcuts</label>
                      <button>Create Event</button>
                      <button>Open Home</button>
                      <button onClick={navHelp}>Open Help</button>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        <Popup
          trigger={
            <button>
              <span className="material-symbols-rounded mt-1 -ml-1.5">
                notifications
              </span>
            </button>
          }
          position="bottom right"
          offsetX={-3}
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
              <img
                src={userAvt}
                alt="userAvt"
                style={{ height: 20 }}
                className="mr-3 -ml-1 -mt-0.5"
              />
            </button>
          }
          position="bottom right"
          offsetX={-7}
        >
          <div className="modalContent flex flex-col items-center text-center">
            <button className="w-full hover:bg-gray-200 flex flex-col items-center">
              <div className="userArea flex items-center ">
                <div className="avtUser">
                  <img src={userAvt} alt="userAvt" style={{ height: 30 }} />
                </div>
                <div className="infoUser">
                  <p className="text-sm">{localStorage.getItem("userName")}</p>
                  <p className="text-xs">Personal</p>
                </div>
              </div>
            </button>
            <button className="w-full hover:bg-gray-200">View Profile</button>
            <button className="w-full hover:bg-gray-200">Settings</button>
            <button
              className="w-full hover:bg-gray-200"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Header;
