import axios from "axios";
import React, { useState } from "react";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  setLoading(true);
  try {
    const signup = async ({ username, firstname, lastname, password }) => {
      const user = await axios.post("", {
        username,
        firstname,
        lastname,
        password,
      });
      localStorage.setItem("user-info", user.data);
      setLoading(false);
    };
  } catch (error) {
    console.log("error in useSignup hook :", error.message);
  }
};

const handleInputErrors = () => {};

export default useSignup;
