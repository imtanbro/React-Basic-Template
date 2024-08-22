import React, { memo } from "react";
import "./Card.css";

const Cards = ({ frontContent, backContent }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">{frontContent}</div>
        <div className="card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default memo(Cards);
