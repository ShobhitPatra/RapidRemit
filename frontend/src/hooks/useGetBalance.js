import axios from "axios";
import React, { useState } from "react";

const useGetBalance = () => {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);

  const getBalance = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:8000/api/v1/account/balance",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.log("error in getBalance hook : ", error.message);
    } finally {
      setLoading(false);
    }
  };
};

export default useGetBalance;
