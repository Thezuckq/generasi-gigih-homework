/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./index.css";

function Button({ name, onClick, link }) {
  const [isSelected, setSelected] = useState(false);

  return (
    <div className="ButtonContainer">
      <a href={link}>
        <button
          className="buttonSelect"
          onClick={() => {
            onClick();
            setSelected(!isSelected);
          }}
        >
          {isSelected ? "Deselect" : name}
        </button>
      </a>
    </div>
  );
}

export default Button;