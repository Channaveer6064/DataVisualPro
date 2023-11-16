import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

export const AccountsWatchList = () => {
  const data = [
    {
      account: "Account",
      thisMonth: "This Month",
      ytd: "YTD",
    },
    {
      account: "Sales",
      thisMonth: "1,954,589",
      ytd: "225,225,365",
    },
    {
      account: "Advertisement",
      thisMonth: "254,562,652",
      ytd: "125,223,612",
    },
    {
      account: "Inventory",
      thisMonth: "335,255,225",
      ytd: "5845,65145",
    },
    {
      account: "Advertisement",
      thisMonth: "254,562,652",
      ytd: "125,223,612",
    },
    {
      account: "Advertisement",
      thisMonth: "254,562,652",
      ytd: "125,223,612",
    },
  ];

  return (
    <Box
      sx={{
        height: "380px",
        width: "780px",
        backgroundColor: "white",
        borderRadius: ".5rem",
      }}
    >
      <Box
        sx={{
          height: "5rem",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Account watchlist</Typography>
      </Box>
      <Divider />

      <Grid container direction={"column"}>
        {data.map((item, i) =>
          i === 0 ? (
            <Grid
              container
              direction={"row"}
              key={i}
              my={2}
              mx={2}
              sx={{ fontSize: "14px", color: "#d3d3d3" }}
            >
              <Grid item xs={8}>
                {item.account}
              </Grid>
              <Grid item xs={2}>
                {item.thisMonth}
              </Grid>
              <Grid item xs={2}>
                {item.ytd}
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              direction={"row"}
              key={i}
              my={1.5}
              mx={2}
              sx={{ fontSize: "14px" }}
            >
              <Grid item xs={8}>
                {item.account}
              </Grid>
              <Grid item xs={2}>
                {item.thisMonth}
              </Grid>
              <Grid item xs={2}>
                {item.ytd}
              </Grid>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};
