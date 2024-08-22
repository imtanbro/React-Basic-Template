import { Typography } from "@mui/material";
import React, { memo } from "react";

const SectionHeading = (props) => {
  const { heading } = props;
  return (
    <Typography variant="h4" gutterBottom>
      {heading}
    </Typography>
  );
};

export default memo(SectionHeading);
