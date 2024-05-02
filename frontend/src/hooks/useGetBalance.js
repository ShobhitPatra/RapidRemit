import React, { useEffect, useState } from "react";

const useGetBalance = () => {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    console.log("useGetBalance");
    const getBalance = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "http://localhost:8000/api/v1/account/balance",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setBalance(data.balance);
        setLoading(false);
      } catch (error) {
        console.log("error in useGetUsers hook :", error.message);
      } finally {
        setLoading(false);
      }
    };
    getBalance();
  }, []);
  return { loading, balance };
};

export default useGetBalance;
