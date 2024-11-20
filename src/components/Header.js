import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { removeUser, addUser } from "../utils/store/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email })); // Check if this action dispatches correctly
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); // Clean up the listener when the component unmounts.
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black w-screen z-10 flex justify-between">
      <img className="w-48 mx-28 my-4 " src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center">
          <h3 className="font-bold mr-4 text-white">{user.displayName}</h3>
          <button
            onClick={handleSignOut}
            className="p-3 bg-red-700 mr-14  text-white rounded-md hover:bg-red-600"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
