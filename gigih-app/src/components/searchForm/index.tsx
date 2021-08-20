import React, { ReactElement } from "react";
import './index.css';
import { InputEvent } from "../../interfaces/tsEvent";

interface Props {
  handleChange?: (value: InputEvent) => void;
  handleSubmit?: () => void;
  value?: string;
  placeholder?: string;
}

function SearchForm(props: Props): ReactElement {
  return (
    <form className="Form" onSubmit={props.handleSubmit}
    >
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
      className="SearchInput"
      data-testid="search_form"
    />
    </form>
  );
}

export default SearchForm;