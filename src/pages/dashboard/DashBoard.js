import React from "react";
import { NavBar } from "../../components/navbar/NavBar";
import Sidebar from "../../components/sidebar/SideBar";
import LineChart from "../../components/linechart/LineChart";
import { Box, Grid } from "@mui/material";

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
            marginTop: "2rem",
            width: "100%",
            // marginLeft: "2rem",
            // overflow: "hidden",
          }}
        >
          <Grid item xs={12} md={6}>
            <LineChart />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashBoard;
