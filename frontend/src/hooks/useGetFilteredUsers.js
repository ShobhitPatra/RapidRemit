import { useDeprecatedAnimatedState } from "framer-motion";
import React, { useEffect, useState } from "react";
import useGetUsers from "./useGetUsers";

const useGetFilteredUsers = () => {
  console.log("inside useGetFilteredUSers");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilteredUsers = async (filter) => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:8000/api/v1/user/filter?filter=${filter}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await res.json();

        setFilteredUsers(data);
        setLoading(false);
      } catch (error) {
        console.log("error in getFilteredUsers :", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFilteredUsers();
  }, [filteredUsers, setFilteredUsers]);

  return { loading, filteredUsers };
};

export default useGetFilteredUsers;
