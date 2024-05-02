import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        // const res = await axios.get("http://localhost:8000/api/v1/user/bulk", {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // });
        // console.log(res.data);
        // // setUsers(res.data.allUsers);
        // const arr = res.data.allUsers;
        // users = [...arr];
        // console.log("res.data.allUsers ", res.data.allUsers);
        // console.log("users:", users);
        // setLoading(false);
        const res = await fetch("http://localhost:8000/api/v1/user/bulk", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log("error in useGetUsers hook :", error.message);
      } finally {
        setLoading(false);
      }
      // console.log("users :", users);
    };
    getUsers();
  }, []);
  return { loading, users };
};

export default useGetUsers;
