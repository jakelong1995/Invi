import React from "react";
import instagram from "./Assets/Instagram.svg";
import X from "./Assets/X.svg";

const Footer = () => {
  return (
    <div className="w-full border-t border-gray-800 border-opacity-10 gap-6 flex p-4 justify-end">
      <img src={X} alt="X" />
      <img src={instagram} alt="Instagram" />
    </div>
  );
};

export default Footer;
