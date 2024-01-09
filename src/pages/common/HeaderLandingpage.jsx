import Clock from "./clock";
import { getAuth, signOut } from "firebase/auth";
import "./header.css";
import { app } from "../../Firebase";
import logo from "../../assets/InviSm.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.setItem("userName", "");
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div>
      <div id="header">
        <div className="mx-auto p-4 flex flex-col justify-between max-w-5xl">
          {/* navbar */}
          <div className="w-full justify-between items-center inline-flex">
            <img src={logo} alt="logo" className="w-10" />
            <Clock />
            {localStorage.getItem("userName") !== "" ? (
              <span>
                <span className="pr-2">
                  Hello, {localStorage.getItem("userName")}!
                </span>
                <button
                  className="px-4 py-2 bg-black bg-opacity-5 hover:bg-gray-500 hover:text-white hover: border-none rounded-full inline-flex text-gray-500 text-sm font-semibold"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </span>
            ) : (
              <button
                className="px-4 py-2 bg-black bg-opacity-5 hover:bg-gray-500 hover:text-white hover: border-none rounded-full inline-flex text-gray-500 text-sm font-semibold"
                onClick={() => handleSignIn()}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
