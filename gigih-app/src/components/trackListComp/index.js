import React from "react";
import "./index.css";

function TrackListComp(props) {
  const { title, list } = props;
  return (
    <div className="list-title">
      <h2>{title}</h2>
      <div className="list-container">{list}</div>
    </div>
  );
}

export default TrackListComp;
