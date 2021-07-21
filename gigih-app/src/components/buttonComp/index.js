import React from "react";
import './index.css';

function ButtonComp({ name, onClick, url }) {
  return (
    <div>
      <a href={url}>
        <button className="buttonSelect" onClick={onClick}>
          {name}
        </button>
      </a>
    </div>
  );
}

export default ButtonComp;
