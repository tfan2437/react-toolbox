import { useState, createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [username, setUsername] = useState("user1");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
