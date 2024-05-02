import React from "react";
import User from "./User";
import useGetUsers from "../hooks/useGetUsers";
import { useAuthContext } from "../context/authContext";

export const Users = () => {
  const { users } = useGetUsers();
  const { authUser, setAuthUser } = useAuthContext();

  return (
    <div className="bg-teal-100 flex flex-col overflow-auto">
      <div className="divider bg-slate-200 h-1"></div>

      {users.map((user) => (
        <>
          <User
            firstname={user.firstname}
            lastname={user.lastname}
            key={user._id}
          />
        </>
      ))}
    </div>
  );
};

export default Users;
