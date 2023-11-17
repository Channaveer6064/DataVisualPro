// DataContext.js
import React, { createContext, useContext, useReducer } from "react";
import { DataReducer } from "../reducers/DataReducer";

// Create the DataContext
const DataContext = createContext();
const getRandomNumber = () => {
  return Math.floor(Math.random() * 900000) + 100000;
};

const initialState = {
  checkingAccount: [92, 59, 99, 87, 80, 132, 82, 111, 67, 57],
  monthAnchorEl: null,
  selectedMonth: "January",
  manageAnchorEl: null,
  selectedDays: [1, 10],
  invoicesOwed: [100, 120, 180, 200, 190, 150],
  accountWatchlist: [
    {
      account: "Sales",
      thisMonth: getRandomNumber().toLocaleString(),
      ytd: getRandomNumber().toLocaleString(),
    },
    {
      account: "Advertising",
      thisMonth: getRandomNumber().toLocaleString(),
      ytd: getRandomNumber().toLocaleString(),
    },
    {
      account: "Inventory",
      thisMonth: getRandomNumber().toLocaleString(),
      ytd: getRandomNumber().toLocaleString(),
    },
    {
      account: "Entertainment",
      thisMonth: getRandomNumber().toLocaleString(),
      ytd: getRandomNumber().toLocaleString(),
    },
    {
      account: "Product",
      thisMonth: getRandomNumber().toLocaleString(),
      ytd: getRandomNumber().toLocaleString(),
    },
  ],
  cashInFlow: [100, 120, 180, 200, 190, 150],
  cashOutFlow: [75, 55, 66, 65, 56, 63],
  monthsData: [
    { name: "January", days: "31" },
    { name: "February", days: "28" },
    { name: "March", days: "31" },
    { name: "April", days: "30" },
    { name: "May", days: "31" },
    { name: "June", days: "30" },
    { name: "July", days: "31" },
    { name: "August", days: "31" },
    { name: "September", days: "30" },
    { name: "October", days: "31" },
    { name: "November", days: "30" },
    { name: "December", days: "31" },
  ],
  isDialogOpen: false,
};
const DataProvider = ({ children }) => {
  // Use useReducer to manage state and dispatch actions
  const [state, dispatch] = useReducer(DataReducer, initialState);

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
