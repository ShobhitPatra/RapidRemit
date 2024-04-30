import React, { Children, createContext, useContext, useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user-info") || null)
  );
  return (
    <authContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(authContext);
};
