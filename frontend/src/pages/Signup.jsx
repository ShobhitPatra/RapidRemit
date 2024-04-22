import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-screen h-screen  bg-teal-50 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-teal-100 border-solid border-black p-16 rounded-md">
        <div className="text-black text-3xl m-2 font-extrabold">Signup</div>
        <div className="text-black text-md m-2">Create your account </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="username"
            className="input input-bordered w-full max-w-xs bg-orange-200 text-orange-900 placeholder-orange-800 m-2  "
          />
          <input
            type="text"
            placeholder="firstname"
            className="input input-bordered w-full max-w-xs bg-orange-200 text-orange-900 placeholder-orange-800 m-2 "
          />
          <input
            type="text"
            placeholder="lastname"
            className="input input-bordered w-full max-w-xs bg-orange-200 text-orange-900 placeholder-orange-800 m-2 "
          />
          <input
            type="text"
            placeholder="password"
            className="input input-bordered w-full max-w-xs bg-orange-200 text-orange-900 placeholder-orange-800 m-2 "
          />
        </div>
        <Link to="/login" className="m-2 text-blue-700 hover:text-blue-950">
          Already have an account ?
        </Link>
        <button className="btn btn-xs bg-orange-500 text-white border-none m-2 sm:btn-sm md:btn-md lg:btn-md">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
