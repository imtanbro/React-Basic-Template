import React, { memo } from "react";
import SectionHeading from "../../Common/Components/SectionHeading";
import Cards from "../../Common/Components/Cards";
import { Grid } from "@mui/material";

const LandingPage = () => {
  console.log("Landing Page Rendered");

  return (
    <div className="flex flex-col justify-between items-center">
      <SectionHeading heading={"Cards Section"} />
      <div>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Cards frontContent="Card 1" backContent="Details of Card 1" />
          </Grid>
          <Grid item xs={3}>
            <Cards frontContent="Card 2" backContent="Details of Card 2" />
          </Grid>
          <Grid item xs={3}>
            <Cards frontContent="Card 3" backContent="Details of Card 3" />
          </Grid>
          <Grid item xs={3}>
            <Cards frontContent="Card 4" backContent="Details of Card 4" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default memo(LandingPage);
