import phoneLightVideo from "../../assets/phone-light.mp4";
import logopng from "../../assets/Invi.png";
import { useNavigate  } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate()

  const handleAddEvent = () =>{
    navigate("/create-event")
  };

  return (
    <div className="bg-rose-50 bg-opacity-20">
        {/* body */}
        <div className="flex flex-col md:flex-row gap-16 justify-between w-full items-center">
          <div className="flex flex-col max-w-sm gap-8 items-center text-center md:items-start md:text-left mx-auto">
            <img src={logopng} alt="logo" className="w-16" onClick={() => navigate('/')} />
            <h1 className="text-gray-800 font-semibold text-4xl md:text-5xl">
              Delightful events{" "}
              <span className="text-rose-400">start here.</span>{" "}
            </h1>
            <p className="text-gray-600">
              Set up an event page, invite friends and sell tickets. Host a
              memorable event today.
            </p>
            <button onClick={handleAddEvent} className="px-6 py-2 bg-gray-800 rounded-lg text-white text-lg font-medium hover:bg-gray-600 border-none">
              Create Your First Event
            </button>
          </div>

          <video autoPlay muted className="w-full md:max-w-lg md:mx-auto">
            <source src={phoneLightVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
  );
};

export default LandingPage;
