import React, { useState } from "react";
import './index.css';

function ButtonComp({ name, onClick, url }) {
  const [isSelected, setSelected] = useState(false);
  return (
    <div>
      <a href={url}>
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

export default ButtonComp;
