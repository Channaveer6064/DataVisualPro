import React, { createContext, useContext, useReducer } from "react";

// Define the initial state for the data
const initialState = {
  checkingAccountData: [],
};

// Define the data reducer function
const dataReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Create the DataContext
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Use useReducer to manage state and dispatch actions
  const [state, dispatch] = useReducer(dataReducer, initialState);

  // Provide the state and dispatch to the context
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

// Create a custom hook to use the data context
const useData = () => useContext(DataContext);

export { DataProvider, useData };
