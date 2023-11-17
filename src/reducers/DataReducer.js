export const DataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_ACCOUNT": {
      const getRandomValue = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

      // Function to generate randomized data for a month
      const generateRandomizedData = (daysInMonth, minValue, maxValue) => {
        const randomizedData = [];
        for (let day = 1; day <= daysInMonth; day++) {
          const randomValue = getRandomValue(minValue, maxValue);
          randomizedData.push(randomValue);
        }
        return randomizedData;
      };
      function getRandomNumber() {
        // Generate a random 6-digit number
        return Math.floor(Math.random() * 900000) + 100000;
      }

      return {
        ...state,
        invoicesOwed: generateRandomizedData(6, 25, 200),
        checkingAccount: generateRandomizedData(payload.days, 50, 150),
        selectedMonth: payload.name,
        accountWatchlist: [
          {
            account: "Account",
            thisMonth: "This Month",
            ytd: "YTD",
          },
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
        cashInFlow: generateRandomizedData(6, 100, 200),
        cashOutFlow: generateRandomizedData(6, 10, 85),
      };
    }

    case "CHANGE_DAYS":
      console.log(payload);
      return { ...state, selectedDays: payload };
    case "TOGGLE_MONTH":
      return {
        ...state,
        monthAnchorEl: state.monthAnchorEl ? null : payload,
      };

    case "TOGGLE_MANAGE":
      return {
        ...state,
        manageAnchorEl: state.manageAnchorEl ? null : payload,
      };
    case "TOGGLE_DIALOG":
      return {
        ...state,
        isDialogOpen: payload,
      };

    default:
      return state;
  }
};
