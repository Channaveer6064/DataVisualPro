import { Box, Divider, Grid, Typography } from "@mui/material";
import { useData } from "../../contexts/DataContext";

export const AccountsWatchList = () => {
  const { state } = useData();
  const { accountWatchlist } = state;

  return (
    <Box
      sx={{
        height: "380px",
        width: "780px",
        backgroundColor: "white",
        borderRadius: ".5rem",
        marginLeft: "-.5rem",
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

      <Grid container direction="column">
        {/* Header Row */}
        <Grid
          container
          direction="row"
          my={2}
          mx={2}
          sx={{ fontSize: "14px", color: "#d3d3d3" }}
        >
          <Grid item xs={9}>
            Account
          </Grid>
          <Grid item xs={1.5}>
            This Month
          </Grid>
          <Grid item xs={1.5}>
            YTD
          </Grid>
        </Grid>

        {/* Data Rows */}
        {accountWatchlist.map((item, i) => (
          <Grid
            container
            direction="row"
            key={i}
            my={1.5}
            mx={2}
            sx={{ fontSize: "14px" }}
          >
            <Grid item xs={9}>
              {item.account}
            </Grid>
            <Grid item xs={1.5}>
              {item.thisMonth}
            </Grid>
            <Grid item xs={1.5}>
              {item.ytd}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
