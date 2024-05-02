import React from "react";
import { HiCurrencyRupee } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import Users from "../components/Users";
import Balance from "../components/Balance";
import { useAuthContext } from "../context/authContext";

const Home = () => {
  const { authUser, setAuthUser } = useAuthContext();

  const handleLogout = () => {
    console.log("clicked");
    setAuthUser(null);
    localStorage.removeItem("user-info");
  };
  return (
    <>
      <div className="flex flex-col h-screen bg-teal-50   ">
        <div className="w-full flex justify-between bg-teal-100 ">
          <div
            id="title"
            className="text-orange-600 text-6xl font-semibold p-6"
          >
            RAPID REMIT
          </div>
          <div
            id="greet"
            className="text-black text-2xl font-semibold p-6 flex items-center"
          >
            Hello {authUser.user.firstname.toUpperCase()}
            <IoLogOutOutline
              className="cursor-pointer m-3"
              onClick={handleLogout}
            />
          </div>
        </div>
        <div id="balance" className="flex justify-between  bg-teal-100  ">
          <div>
            <Balance />
          </div>
        </div>
        <div className="flex justify-between w-full bg-teal-100">
          <div className=" text-slate-800 text-3xl p-4 font-semibold">
            Users
          </div>
          <input
            type="text"
            placeholder="search user"
            className=" text-xl p-2 m-3 rounded-md bg-white text-slate-700 "
          ></input>
        </div>
        <Users />
      </div>
    </>
  );
};

export default Home;
