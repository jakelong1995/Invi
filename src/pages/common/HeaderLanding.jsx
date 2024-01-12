import React from "react";
import Clock from "./clock";
import Logo from "../../assets/InviSm.svg";
import { useNavigate } from "react-router-dom";

const Header1 = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/login");
  };
  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <div className="w-full justify-between items-center inline-flex">
      <button onClick={navigateHome}>
        <img src={Logo} alt="logo" className="w-10" />
      </button>

      <div className="flex gap-4">
        <Clock />
        <button
          className="px-4 py-2 bg-black bg-opacity-5 hover:bg-gray-500 hover:text-white hover: border-none rounded-full inline-flex text-gray-500 text-sm font-semibold"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header1;
