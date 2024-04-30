import React, { useState } from "react";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";
import axios from "axios";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async (username, firstname, lastname, password) => {
    setLoading(true);

    const success = handleInputErrors(username, firstname, lastname, password);
    if (!success) {
      toast.error("invalid inputs");
      return;
    }
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/signup", {
        username,
        firstname,
        lastname,
        password,
      });
      const userData = res.data;
      localStorage.setItem("user-info", userData);
      setAuthUser(userData);
      setLoading(false);
    } catch (error) {
      console.log("error in useSignup hook : ", error.message);
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};

const handleInputErrors = (username, firstname, lastname, password) => {
  if (!username || !firstname || !lastname || !password) {
    console.log("please fill all the feilds");
    toast.error("Please fill all the feilds");
    return false;
  }
  if (password.length < 8) {
    toast.error("password too small");
    console.error("password too small");
    return false;
  }
  return true;
};
export default useSignup;
