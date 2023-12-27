import React from "react";
<<<<<<<< HEAD:src/pages/Footer/Footer.jsx
import instagram from "/src/Assets/Instagram.svg";
import X from "/src/Assets/X.svg";
========
import instagram from "../../assets/Instagram.svg";
import X from "../../Assets/X.svg";
>>>>>>>> origin/main:src/pages/home/Footer.jsx

const Footer = () => {
  return (
    <div className="w-full border-t border-gray-800 border-opacity-10 gap-6 flex p-4 justify-end">
      <img src={X} alt="X" />
      <img src={instagram} alt="Instagram" />
    </div>
  );
};

export default Footer;
