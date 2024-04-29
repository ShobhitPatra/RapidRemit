import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    // console.log(`${username} ${firstname} ${lastname} ${password}`);
  };

  return (
    <div
      id="bg"
      className="h-screen  rounded-md flex flex-col min-w-96 mx-auto justify-center items-center bg-teal-50 "
    >
      <div
        id="signup-container"
        className="flex flex-col   border-black p-16  bg-teal-100 rounded-md"
      >
        <div id="title-and-subtitle">
          <div className="text-black text-3xl m-2 font-extrabold">Signup</div>
          <div className="text-black text-md m-2">Create your account </div>
        </div>
        <div id="input-container" className="flex flex-col">
          <input
            type="text"
            value={username}
            placeholder="username"
            className="input input-bordered w-full max-w-xs bg-orange-200 text-orange-900 placeholder-orange-800 m-2  "
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            value={firstname}
            placeholder="firstname"
            className="input input-bordered w-full max-w-xs bg-orange-200 text-orange-900 placeholder-orange-800 m-2 "
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <input
            type="text"
            value={lastname}
            placeholder="lastname"
            className="input input-bordered w-full max-w-xs bg-orange-200 text-orange-900 placeholder-orange-800 m-2 "
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <input
            type="text"
            value={password}
            placeholder="password"
            className="input input-bordered w-full max-w-xs bg-orange-200 text-orange-900 placeholder-orange-800 m-2 "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Link to="/login" className="m-2 text-blue-700 hover:text-blue-950">
          Already have an account ?
        </Link>
        <button
          className="btn btn-xs bg-orange-500 text-white border-none m-2 sm:btn-sm md:btn-md lg:btn-md"
          onClick={handleSubmit}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
