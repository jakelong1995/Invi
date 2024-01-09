import phoneLightVideo from "../../assets/phone-light.mp4";
import logo from "../../assets/InviSm.svg";
import logopng from "../../assets/Invi.png";
import Footer from "../common/Footer";
import { useNavigate } from "react-router-dom";
import Clock from "../common/Clock";

const LandingPage = () => {
  const navigate = useNavigate();


  const handleSignIn = () => {
    navigate("/Invi/login");
  };

  return (
    <div className="bg-white">
      <div className="mx-auto p-4 flex flex-col justify-between h-screen max-w-5xl">
        {/* navbar */}
        <div className="w-full justify-between items-center inline-flex">
          <img src={logo} alt="logo" className="w-10" />
          <Clock />

          <button
            className="px-4 py-2 bg-black bg-opacity-5 hover:bg-gray-500 hover:text-white hover: border-none rounded-full inline-flex text-gray-500 text-sm font-semibold"
            onClick={() => handleSignIn()}
          >
            Sign In
          </button>
        </div>

        {/* body */}
        <div className="flex flex-col md:flex-row gap-16 justify-between w-full items-center">
          <div className="flex flex-col max-w-sm gap-8 items-center text-center md:items-start md:text-left mx-auto">
            <img src={logopng} alt="logo" className="w-16" />
            <h1 className="text-gray-800 font-semibold text-4xl md:text-5xl">
              Delightful events{" "}
              <span className="text-rose-400">start here.</span>{" "}
            </h1>
            <p className="text-gray-600">
              Set up an event page, invite friends and sell tickets. Host a
              memorable event today.
            </p>
            <button
              onClick={handleSignIn}
              className="px-6 py-2 bg-gray-800 rounded-lg text-white text-lg font-medium hover:bg-gray-600 border-none"
            >
              Create Your First Event
            </button>
          </div>

          <video autoPlay muted className="w-full md:max-w-lg md:mx-auto">
            <source src={phoneLightVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
