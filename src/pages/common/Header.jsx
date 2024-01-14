import React from "react";
import Clock from "./clock";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../Firebase";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Logo from "../../assets/InviSm.svg";

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
        navigate("/");
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
    <div className="w-full justify-between items-center inline-flex">
      <button onClick={navigateHome}>
        <img src={Logo} alt="logo" className="w-10" />
      </button>

      <div className="flex gap-4">
        <div className="mb-1.5">
          <Clock />
        </div>
        <button
          onClick={navEventCreate}
          className="font-medium text-gray-500 hover:text-gray-800"
        >
          Create Event
        </button>

        <button type="button" onClick={openModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500 hover:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
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
                    <div className=" flex flex-wrap gap-4">
                      <div className="w-full max-w-xl flex text-xl">
                        <input
                          type="text"
                          className="w-full placeholder-gray-400 text-gray-900 p-2"
                          placeholder="Search for events, calendars and more..."
                        />
                      </div>
                      <hr />
                      {/* <label>Shortcuts</label>
                      <button>Create Event</button>
                      <button>Open Home</button>
                      <button onClick={navHelp}>Open Help</button> */}
                    </div>

                    <div className="mt-4">
                      {/* <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button> */}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500 hover:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </button>
        {/* <Popup
          trigger={ */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-gray-500 hover:text-gray-800"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* }
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
        </Popup> */}
      </div>
    </div>
  );
};

export default Header;
