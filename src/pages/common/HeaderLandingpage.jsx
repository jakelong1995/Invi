import ClockHeader from "./ClockHeader";
import "./header.css";
import logo from "../../assets/InviSm.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/Invi/login");
  };
  const navigateLandingPage = () => {
    navigate("/Invi/");
  };

  return (
    <div>
      <div id="header">
        <div className="mx-auto p-4 flex flex-col justify-between max-w-5xl">
          {/* navbar */}
          <div className="w-full justify-between items-center inline-flex">
            <button onClick={() => navigateLandingPage()}>
              <img src={logo} alt="logo" className="w-10" />
            </button>
            <ClockHeader />
            <button
              className="px-4 py-2 bg-black bg-opacity-5 hover:bg-gray-500 hover:text-white hover: border-none rounded-full inline-flex text-gray-500 text-sm font-semibold"
              onClick={() => handleSignIn()}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
