import { Div } from "atomize";
import React from "react";
import "./index.css";

function TrackListComp(props) {
  const { title, list } = props;
  return (
    <div className="list-title">
      <h2>{title}</h2>
      <Div className="list-container">{list}</Div>
    </div>
  );
}

export default TrackListComp;
