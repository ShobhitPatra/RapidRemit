import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import EachUser from "./EachUser";

export default function Users() {
  const [filter, setFilter] = useState("");
  const [users, setusers] = useState([]);

  useEffect(() => {
    const response = axios.get(
      "http://localhost:3000/api/v1/user/bulk?filter=" + filter
    );
    const desiredUsers = response.data;
    setusers(desiredUsers);
  }, [filter]);
  return (
    <>
      <div id="users-outer-container" className="flex flex-col w-screen">
        <div id="users-title" className="xl:text-2xl font-semibold m-2">
          Users
        </div>
        <div id="input" className="flex justify-between bg-red-600">
          <input
            type="text"
            placeholder="search users"
            className="w-full p-2 text-xl m-2 rounded-lg "
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          ></input>
        </div>
        <div id="filtered-users">
          <EachUser />
          <EachUser />
          <EachUser />
        </div>
      </div>
    </>
  );
}
