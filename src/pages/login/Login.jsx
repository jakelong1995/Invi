import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../Firebase";
import { useNavigate } from "react-router-dom";
// import "./index.css";
import Header1 from "../common/HeaderLanding";
import { useState } from "react";

const Login = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [user, setUser] = useState();

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        if (loggedInUser?.displayName) {
          localStorage.setItem("userName", loggedInUser.displayName);
          navigate("/Invi/home");
        }
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div className="mx-auto p-4 flex flex-col items-center h-screen">
      {/* navbar */}
      <Header1 />

      {/* body */}
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div className="flex flex-col border-gray-700 bg-white m-auto p-6 rounded-xl text-center">
          <h1 className="text-lg font-bold text-gray-800">Welcome to INVI</h1>
          <div className="text-sm text-gray-400 mb-4">
            Please sign in or sign up below.
          </div>
          <button className="flex w-full bg-gray-100 items-center gap-2 py-2 px-8 rounded-lg">
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C270.5 52.6 106.3 116.6 106.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H260v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4Z"
              ></path>
            </svg>
            <div className="text-gray-600" onClick={handleGoogleSignIn}>
              Sign in with Google
            </div>
          </button>
        </div>
      )}
      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};
export default Login;
