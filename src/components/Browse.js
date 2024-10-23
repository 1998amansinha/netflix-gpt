import React from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/store/userSlice";
import { useNavigate } from "react-router-dom";

const Browse = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOut = () => {
    dispatch(removeUser())
    navigate('/')
  }

  return (
    <div className="flex justify-end">
      <Header />
      <button onClick={handleSignOut} className="bg-red-700 p-3 rounded-md m-8 text-white z-10 hover:bg-red-600">
        Sign Out
      </button>
    </div>
  );
};

export default Browse;
