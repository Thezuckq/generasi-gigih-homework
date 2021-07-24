import React from "react";

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