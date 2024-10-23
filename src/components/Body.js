import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeUser, addUser } from "../utils/store/userSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email })); // Check if this action dispatches correctly
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return <RouterProvider router={appRouter} />;
};

export default Body;
