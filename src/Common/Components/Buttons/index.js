import { Button } from "@mui/material";
import React from "react";

const Buttons = (props) => {
  const {
    label,
    onBtnCLick = () => {
      console.log("Click");
    },
    isActive,
  } = props;
  return (
    <div>
      <Button
        variant={isActive ? "contained" : "outlined"}
        onClick={onBtnCLick}
      >
        {label}
      </Button>
    </div>
  );
};

export default Buttons;
