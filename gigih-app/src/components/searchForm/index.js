import React from "react";
import './index.css';

function SearchForm({ handleChange, handleSubmit, value, placeholder }) {
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className="SearchInput"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </form>
  );
}

export default SearchForm;