import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    email: "",
    displayName: "",
    name: "", 
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      { children }
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
