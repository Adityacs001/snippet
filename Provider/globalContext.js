import React, { createContext, useContext, useReducer } from "react";

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ reducer, initialState, children }) => (
  <GlobalContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GlobalContext.Provider>
);
export const useGlobalStateValue = () => useContext(GlobalContext);
