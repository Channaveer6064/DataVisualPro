import React from "react";
import { NavBar } from "../../components/navbar/NavBar";
import Sidebar from "../../components/sidebar/SideBar";
import LineChart from "../../components/linechart/LineChart";
import { Grid } from "@mui/material";
import { InvoicesOwedChart } from "../../components/barcharts/InvoicesOwedChart";
import { CashFlowChart } from "../../components/barcharts/CashFlowChart";
import { AccountsWatchList } from "../../components/accountWatchList/AccountWatchList";

const DashBoard = () => {
  return (
    <Grid container>
      {/* Sidebar */}
      <Grid item>
        <Sidebar />
      </Grid>

      {/* Main Content */}
      <Grid
        item
        container
        direction="column"
        sx={{ flexGrow: 1, marginLeft: "15rem" }}
      >
        {/* NavBar */}
        <Grid item sx={{ width: "100%" }}>
          <NavBar />
        </Grid>

        {/* LineChart */}
        <Grid
          item
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
          sx={{
            flexGrow: 1,
            marginTop: "1rem",
            width: "100%",
          }}
        >
          <Grid item xs={12} md={6}>
            <LineChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <InvoicesOwedChart />
          </Grid>
          <Grid item xs={12} md={6} my={2}>
            <CashFlowChart />
          </Grid>
          <Grid item xs={12} md={6} my={2}>
            <AccountsWatchList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashBoard;
