import React from "react";
import star from "../../assets/star.png";
import Clock from "./clock";
import { useNavigate } from "react-router-dom";

const HeaderLandingpage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Invi/login");
  };

  return (
    <div className="menuHeader flex justify-between items-center">
      <div className="iconHome">
        <img src={star} alt="star" style={{ height: 20 }} />
      </div>

      <div className="extHome flex gap-4">
        <Clock />

        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-black bg-opacity-5 hover:bg-gray-500 hover:text-white hover: border-none rounded-full inline-flex text-gray-500 text-sm font-semibold"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default HeaderLandingpage;
