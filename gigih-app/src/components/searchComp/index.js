import React from "react";
import './index.css';

function SearchComp(props) {
  const { handleChange, handleClick, value, placeholder } = props;

  return (
    <div className="search-comp">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        className="search"
      />
      <button onClick={handleClick} className="button-search">
        Search
      </button>
    </div>
  );
}

export default SearchComp;