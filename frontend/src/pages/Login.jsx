import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
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
          <div className="text-black text-3xl m-2 font-extrabold">Signin</div>
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
            value={password}
            placeholder="password"
            className="input input-bordered w-full max-w-xs bg-orange-200 text-orange-900 placeholder-orange-800 m-2 "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Link to="/signup" className="m-2 text-blue-700 hover:text-blue-950">
          Don't have an account yet ?
        </Link>
        <button
          className="btn btn-xs bg-orange-500 text-white border-none m-2 sm:btn-sm md:btn-md lg:btn-md"
          onClick={handleSubmit}
        >
          Signin
        </button>
      </div>
    </div>
  );
};

export default Login;
