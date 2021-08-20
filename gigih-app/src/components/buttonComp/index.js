/* eslint-disable react/prop-types */
import { Button, Div, Anchor } from "atomize";
import React, { useState } from "react";
import "./index.css";

function ButtonCompo({ name, onClick, link }) {
  const [isSelected, setSelected] = useState(false);

  return (
    <Div 
    justify="center"
    d="flex"
    >
      <Anchor 
      data-testid="button_test"
      href={link}>
        <Button
          className="buttonSelect"
          onClick={() => {
            onClick();
            setSelected(!isSelected);
          }}
        >
          {isSelected ? "Deselect" : name}
        </Button>
      </Anchor>
    </Div>
  );
}

export default ButtonCompo;