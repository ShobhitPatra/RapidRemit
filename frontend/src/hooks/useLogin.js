import React, { useState } from "react";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";
import axios from "axios";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (username, password) => {
    setLoading(true);

    const success = handleInputErrors(username, password);

    if (!success) {
      toast.error("invalid inputs");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        username,
        password,
      });

      const userData = res.data;
      localStorage.setItem("user-info", JSON.stringify(userData));
      setAuthUser(userData);
      setLoading(false);
    } catch (error) {
      console.log("error in uselogin hook :", error.message);
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
};

const handleInputErrors = (username, password) => {
  if (!username || !password) {
    toast.error("please fill all the feilds");
    console.log("please fill all the feilds");
    return false;
  }
  if (password.length < 8) {
    toast.error("password too short");
    console.error("password too short");
    return false;
  }
  return true;
};
export default useLogin;
