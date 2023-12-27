import React from "react";
import facebook from "../../assets/facebook.svg";
import X from "../../Assets/X.svg";

const Footer = () => {
  return (
    <div className="w-full border-t border-gray-800 border-opacity-10 gap-6 flex p-4 justify-end">
      <img src={facebook} alt="facebook" />
      <img src={X} alt="X" />
    </div>
  );
};

export default Footer;
