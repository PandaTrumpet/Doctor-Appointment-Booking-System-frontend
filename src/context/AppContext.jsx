import { createContext } from "react";
import { doctors } from "../assets/assets.js";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const correncySymbol = "$";
  const value = {
    doctors,
    correncySymbol,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
